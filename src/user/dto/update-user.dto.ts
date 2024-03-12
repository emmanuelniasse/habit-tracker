import { CreateHabitDto } from 'src/habit/dto/create-habit.dto';

import { IsString, ValidateNested } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name: string;

  // @MinLength(8)
  // @MaxLength(20) // Exemple : longueur maximale de 20 caractères
  // @Matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //   {
  //     message:
  //       'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial',
  //   },
  // )
  password: string;

  @ValidateNested({ each: true })
  habits?: CreateHabitDto[];
}
