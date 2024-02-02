import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePackageDto {
  @ApiProperty({
    type: 'number',
  })
  @IsNumber()
  @IsPositive()
  height: number;

  @ApiProperty({
    type: 'number',
  })
  @IsNumber()
  @IsPositive()
  length: number;

  @ApiProperty({
    type: 'number',
  })
  @IsNumber()
  @IsPositive()
  width: number;

  @ApiProperty({
    type: 'number',
  })
  @IsNumber()
  @IsPositive()
  poundsWeight: number;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  content: string;
}
