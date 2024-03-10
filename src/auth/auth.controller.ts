import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    readonly configService: ConfigService,
  ) {}

  // @HttpCode(HttpStatus.OK)
  // TODOO: à voir / Si je met ça, le code sera automatiquement 200, mais si j'ai une erreur dans le service, je ne pourrais pas la gérer si j'ai bien compris.

  // En testant l'autre func login (app.controller)
  // @Post('login')
  // signIn(@Body() userLoginDto: LoginDto) {
  //   return this.authService.login(userLoginDto);
  // }

  @Post('register')
  signUp(@Body() userRegisterDto: RegisterDto) {
    return this.authService.register(userRegisterDto);
  }
}
