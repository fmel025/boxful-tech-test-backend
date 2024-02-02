import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreatePackageDto } from './create-package.dto';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  collectingAddress: string;

  @ApiProperty({})
  date: Date;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  names: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  lastnames: string;

  @ApiProperty({})
  @IsEmail()
  email: string;

  @ApiProperty({})
  @IsString()
  phone: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  recipientAddress: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  reference: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  indications: string;

  @ApiProperty({
    type: [CreatePackageDto],
    description: 'The packages included in this order',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePackageDto)
  packages: CreatePackageDto[];
}
