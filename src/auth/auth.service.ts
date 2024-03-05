import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
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

    const user = await this.userService.user({ email: email });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.email, password: user.password };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(registerDto: RegisterDto): Promise<User> {
    return this.prisma.user.create({
      data: registerDto as Prisma.UserCreateInput,
    });
  }
}
