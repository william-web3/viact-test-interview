import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from '../services';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { AppRequest } from '../types';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '../entities';

@ApiBearerAuth()
@ApiTags('User')
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getProfile(@Req() req: AppRequest): Promise<User> {
    const profile = await this.userService.getProfileHandler(req.user.sub);
    delete profile['password'];
    delete profile['salt'];
    return profile;
  }
}
