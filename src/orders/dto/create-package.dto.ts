import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePackageDto {
  @ApiProperty({
    type: 'number',
    example: 3,
  })
  @IsNumber()
  @IsPositive()
  height: number;

  @ApiProperty({
    type: 'number',
    example: 4,
  })
  @IsNumber()
  @IsPositive()
  length: number;

  @ApiProperty({
    type: 'number',
    example: 5,
  })
  @IsNumber()
  @IsPositive()
  width: number;

  @ApiProperty({
    type: 'number',
    example: 20,
  })
  @IsNumber()
  @IsPositive()
  poundsWeight: number;

  @ApiProperty({ type: 'string', example: 'Content example' })
  @IsString()
  @IsNotEmpty()
  content: string;
}
