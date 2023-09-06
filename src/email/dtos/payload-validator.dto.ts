import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PayloadValidatorDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  from: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  to: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  text?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  html?: string;
}
