import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { JwtService } from '@nestjs/jwt';

import { SignInDto, SignUpDto } from 'src/modules/user/dto';
import * as utils from '../../../utils';
import { User } from 'src/modules/user/entities';
import { Repository } from 'typeorm';
import { AppJwtService } from './jwt.service';
import { UserStatus } from '../types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: AppJwtService,
  ) {}

  async signInHandler(params: SignInDto) {
    const user = await this.userRepo.findOneBy([
      { username: params.username },
      { email: params.username },
    ]);
    if (!user) {
      throw new UnauthorizedException('Username or password is incorrect!');
    }
    if (user.status === UserStatus.UNVERIFY) {
      throw new UnauthorizedException('Please verify your account!');
    }
    if (user.status === UserStatus.INACTIVE) {
      throw new UnauthorizedException('This user is inactive!');
    }
    const isValid = utils.comparePassword(
      user.password,
      params.password,
      user.salt,
    );

    if (!isValid) {
      throw new UnauthorizedException('Username or password is incorrect!');
    }

    const jwt = this.jwtService.generateJWT(user);
    return jwt;
  }

  async signUpHandler(params: SignUpDto): Promise<User> {
    const userByUsername = await this.userRepo.findOneBy({
      username: params.username,
    });
    if (userByUsername) {
      throw new InternalServerErrorException('Username already exists');
    }

    const userByEmail = await this.userRepo.findOneBy({
      email: params.email,
    });
    if (userByEmail) {
      throw new InternalServerErrorException('Email already exists');
    }

    // const userByPhone = await this.userRepo.findOneBy({
    //   phone: params.phone,
    // });
    // if (userByPhone) {
    //   throw new InternalServerErrorException('Phone already exists');
    // }

    const { hashedPassword, salt } = utils.passwordHashing(params.password);

    return this.userRepo.save({
      ...params,
      password: hashedPassword,
      salt,
    });
  }

  async getProfileHandler(id: number) {
    return await this.userRepo.findOne({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        // yearOfBirth: true,
      },
    });
  }
}
