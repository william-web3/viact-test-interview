import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { JwtService } from '@nestjs/jwt';

import { SignInDto, SignUpDto } from 'src/user/dto';
import * as utils from '../../utils';
import { User } from 'src/user/entities';
import { Repository } from 'typeorm';
import { AppJwtService } from './jwt.service';

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
        yearOfBirth: true,
      },
    });
  }
}
