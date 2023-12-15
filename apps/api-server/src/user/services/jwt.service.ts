import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/user/entities';
import { ConfigService } from '@nestjs/config';
import { JWTPayload } from '../types';

@Injectable()
export class AppJwtService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async generateJWT(user: User) {
    const payload: JWTPayload = { sub: user.id, username: user.username };
    const access_token = await this.jwtService.signAsync(payload, {
      secret: await this.configService.get('JWT_SECRET'),
    });
    return {
      access_token,
    };
  }

  async validateJWT(jwt: string): Promise<JWTPayload> {
    const decodedData = await this.jwtService.verifyAsync(jwt, {
      secret: await this.configService.get('JWT_SECRET'),
    });
    return decodedData;
  }
}
