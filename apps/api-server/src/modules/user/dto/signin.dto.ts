import { Transform } from 'class-transformer';
import { IsString, Matches } from 'class-validator';

import { passwordRegex } from '../../../utils/constants';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty()
  @Transform((e) => e.value.toLowerCase())
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  @Matches(passwordRegex, { message: 'Password is not valid' })
  password: string;
}
