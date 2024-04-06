import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';
import { CreateHabitDto } from './create-habit.dto';

export class UpdateHabitDto extends PartialType(CreateHabitDto) {
  @IsString()
  @ApiProperty({
    example: 'Yoga',
    required: false,
  })
  label: string;

  @ApiProperty({
    example:
      'A daily routine involving various stretching and meditation exercises.',
    required: false,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  description?: string;

  @ApiProperty({
    example: true,
    required: false,
  })
  @IsBoolean()
  completed: boolean;
}
