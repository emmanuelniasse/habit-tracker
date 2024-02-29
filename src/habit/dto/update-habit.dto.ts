import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateHabitDto } from './create-habit.dto';

export class UpdateHabitDto extends PartialType(CreateHabitDto) {
  @IsString()
  label: string;
}
