import { IsEmail, IsString, ValidateNested } from 'class-validator';
import { CreateHabitDto } from 'src/habit/dto/create-habit.dto';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @ValidateNested({ each: true })
  habits?: CreateHabitDto[];
}
