import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
import { passwordCompare, passwordHash } from '../utilities/password.utility';
import { AuthServiceInterface } from './auth.interface';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/signup.dto';

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const { email, password } = loginDto;

    // TODOO : func userExist()
    const user = await this.userService.user({ email: email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // TODOO : Si ça se trouve tu peux encore mieux  refacto en virant ça autre part
    const isPasswordValid = await passwordCompare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.email, username: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(userRegisterData: RegisterDto): Promise<User> {
    // TODOO : externaliser pour plus de lisibilité
    const initialPassword = userRegisterData.password;
    const hashedPassword = await passwordHash(initialPassword);
    userRegisterData.password = hashedPassword;

    return this.prisma.user.create({
      data: userRegisterData as Prisma.UserCreateInput,
    });
  }
}
