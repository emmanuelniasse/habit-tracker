import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
import { passwordHash } from '../utilities/password.utility';
import { AuthServiceInterface } from './auth.interface';
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
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.user({ email: username });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // const isPasswordValid = await passwordCompare(password, user.password);
    // if (!isPasswordValid) {
    //   throw new UnauthorizedException('Invalid credentials');
    // }
    // const { password: userPassword, ...result } = user;
    // return result;
    return user;
  }

  // async login(loginPayload: LoginDto): Promise<{ access_token: string }> {
  //   const { email, password } = loginPayload;
  async login(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    // TODOO : func userExist(loginPayload)

    const user = await this.userService.user({ email: email });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // const isPasswordValid = await passwordCompare(password, user.password);
    const isPasswordValid = password === user.password ? true : false;
    console.log(isPasswordValid);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.email, id: user.id, username: user.name };

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
