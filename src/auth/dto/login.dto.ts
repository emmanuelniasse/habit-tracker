import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  // TODOO : Pour que ces décorateurs soient pris en compte, nous avons besoin d'importer et d'utiliser la function 'validate' de class-validator
  // import { validate } from 'class-validator';
  // Et créer un middleware

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(4)
  password: string;
}
