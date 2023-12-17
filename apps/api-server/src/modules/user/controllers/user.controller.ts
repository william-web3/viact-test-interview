import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from '../services';
import { JwtAuthGuard } from '../../../guards/jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '../entities';
import { RequestUser } from 'src/decorators';

@ApiBearerAuth()
@ApiTags('User')
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getProfile(@RequestUser('id') id: number): Promise<User> {
    const profile = await this.userService.getProfileHandler(id);
    return profile;
  }
}
