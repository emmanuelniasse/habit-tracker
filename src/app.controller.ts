import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(
      'je veux absolument passer un DTO, je ne comprends pas pk ça ne marche pas.',
    );
    const { email, password } = req.user;
    return this.authService.login(email, password);
  }
}
