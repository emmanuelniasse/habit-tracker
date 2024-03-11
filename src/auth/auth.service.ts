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

  // async validateUser(loginPayload: LoginDto): Promise<any> {
  // const { email, password } = loginPayload;
  // console.log(loginPayload);
  async validateUser(loginDto: LoginDto): Promise<any> {
    const user = await this.userService.user({ email: loginDto.email });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordIsValid = await passwordCompare(
      loginDto.password,
      user.password,
    );

    if (!passwordIsValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { password: userPassword, ...result } = user;

    return result;
    // return user;
  }

  // async login(loginPayload: LoginDto): Promise<{ access_token: string }> {
  //   const { email, password } = loginPayload;
  async login(user: any): Promise<{ access_token: string }> {
    const payload = { sub: user.email, id: user.id };

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
