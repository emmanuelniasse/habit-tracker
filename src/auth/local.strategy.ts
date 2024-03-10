import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  // TODOO URGENT : ICI JE VEUX PASSER UN DTO, PAR DEFAUT "validate" PREND 2 ARGUMENTS ON DIRAIT : username, password. ........
  // async validate(loginPayload: LoginDto): Promise<any> {
  // console.log(loginPayload);
  // const user = await this.authService.validateUser(loginPayload);
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
