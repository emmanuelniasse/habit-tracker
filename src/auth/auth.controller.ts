import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from '../user/dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDto: LoginDto) {
    const { email, name } = loginDto;
    return this.authService.signIn(email, name);
  }
}
