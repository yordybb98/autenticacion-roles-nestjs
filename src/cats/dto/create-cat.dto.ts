import { Breed } from '@prisma/client';
import { IsInt, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsInt()
  @IsPositive()
  breed: number;
}
