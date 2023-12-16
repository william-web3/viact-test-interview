import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from '@nestjs/config';
import { JWT_SECRET_ENV_KEY } from 'src/utils/constants';
import { UserService } from 'src/user/services';
import { JWTPayload } from 'src/user/types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get(JWT_SECRET_ENV_KEY),
    });
  }

  async validate(payload: JWTPayload) {
    const { id } = payload;
    const user = await this.userService.getProfileHandler(Number(id));
    if (!user) {
      throw new UnauthorizedException('Username or password is incorrect!');
    }

    return payload;
  }
}
