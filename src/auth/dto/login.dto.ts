import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  // TODOO : Pour que ces décorateurs soient pris en compte, nous avons besoin d'importer et d'utiliser la function 'validate' de class-validator
  // import { validate } from 'class-validator';
  // Et créer un middleware

  @IsEmail()
  email: string;

  @MinLength(10)
  @MaxLength(20) // Exemple : longueur maximale de 20 caractères
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial',
    },
  )
  password: string;
}
