import { Transform } from 'class-transformer';
import { IsEmail, IsNumber, IsString, Matches } from 'class-validator';
import { passwordRegex, usernameRegex } from '../../utils/constants';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty()
  @Transform((e) => e.value.toLowerCase())
  @IsString()
  @Matches(usernameRegex, { message: 'Username is not valid' })
  username: string;

  @ApiProperty()
  @Transform((e) => e.value.toLowerCase())
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @Matches(passwordRegex, { message: 'Password is not valid' })
  password: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  // @ApiProperty()
  // @IsNumber()
  // yearOfBirth: number;
}
