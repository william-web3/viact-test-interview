import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './services/user.service';
import { AuthController } from './controllers/auth.controller';
import { DatabaseModule } from '../../database/database.module';
import { User } from './entities';
import { ConfigModule } from '@nestjs/config';
import { AppJwtService } from './services/jwt.service';
import { UserController } from './controllers';
import { JwtStrategy } from '../../guards/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule,
    JwtModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController, UserController],
  providers: [UserService, AppJwtService, JwtStrategy],
})
export class UserModule {}
