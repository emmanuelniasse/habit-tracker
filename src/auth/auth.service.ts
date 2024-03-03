import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    passSimulation: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.user({
      email: email,
    } as Prisma.UserWhereUniqueInput);

    if (user?.name !== passSimulation) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.email, username: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
