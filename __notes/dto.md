Les + du DTO :

1.  _Meilleure lisibilité_

    _SANS DTO_

    ```typescript
        // src/user/user.controller.ts

        @Post('user')
        async signupUser(
            @Body() userData: { name?: string; email: string },
            ): Promise<UserModel> {
            return this.userService.createUser(userData);
        }
    ```

    _AVEC DTO_

    ```typescript

        @Post()
        async createUser(
            @Body() userData: CreateUserDto
            ): Promise<UserModel> {
            return this.userService.createUser(userData);
        }
    ```

    Dans le cass ou `userData` comprendrait plus de données, la ligne ne changerait pas.

2.  _Réutilisabilité, maintenabilité et sécurité_ :
    L'utilisation d'un DTO centralise la définition des données, simplifiant ainsi la gestion des modifications. Au lieu de mettre à jour manuellement chaque utilisation des données, il suffit de modifier le DTO, ce qui réduit les risques d'erreurs et facilite la maintenance du code.

3.  _Validation des Données_
    Le DTO permet la validation de données (contrôle), ex :

    ```typescript
    // src/user/dto/create-user.dto.ts
    import { IsEmail, IsOptional, IsString } from 'class-validator';

    export class CreateUserDto {
      @IsString()
      @IsOptional()
      name?: string;

      @IsEmail()
      email: string;
    }
    ```
