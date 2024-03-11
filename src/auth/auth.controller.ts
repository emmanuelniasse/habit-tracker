import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    readonly configService: ConfigService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  signUp(@Body() userRegisterDto: RegisterDto) {
    return this.authService.register(userRegisterDto);
  }

  // @HttpCode(HttpStatus.OK)
  // TODOO: à voir / Si je met ça, le code sera automatiquement 200, mais si j'ai une erreur dans le service, je ne pourrais pas la gérer si j'ai bien compris.

  // En testant l'autre func login (app.controller)
  // @Post('login')
  // signIn(@Body() userLoginDto: LoginDto) {
  //   return this.authService.login(userLoginDto);
  // }
}
