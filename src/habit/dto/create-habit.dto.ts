import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateHabitDto {
  @ApiProperty({
    example: 'Meditation',
    required: true,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  label: string;

  @ApiProperty({
    example: 'A daily practice of mindfulness and relaxation.',
    required: false,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  description?: string;

  @ApiProperty({
    example: false,
    required: false,
  })
  @IsBoolean()
  completed: boolean;

  @IsNumber()
  @Min(1)
  authorId: number;

  author: { connect: { id: number } };
}
