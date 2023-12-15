import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from '../dto';
import { UserService } from '../services';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async signUp(@Body() params: SignUpDto) {
    const response = await this.userService.signUpHandler(params);
    delete response['password'];
    delete response['salt'];
    return response;
  }

  @Post('/signin')
  async signIn(@Body() params: SignInDto) {
    const response = await this.userService.signInHandler(params);
    return response;
  }
}
