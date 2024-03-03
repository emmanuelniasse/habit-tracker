import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from '../user/dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  // Si je met ça, le code sera automatiquement 200, mais si j'ai une erreur dans le service, je ne pourrais pas la gérer si j'ai bien compris.

  @Post('login')
  signIn(@Body() loginDto: LoginDto) {
    const { email, name } = loginDto;
    return this.authService.signIn(email, name);
  }
}
