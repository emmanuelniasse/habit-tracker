import { IsString, ValidateNested } from 'class-validator';
import { CreateHabitDto } from 'src/habit/dto/create-habit.dto';

export class UpdateUserDto {
  @IsString()
  name: string;

  @ValidateNested({ each: true })
  habits?: CreateHabitDto[];
}
