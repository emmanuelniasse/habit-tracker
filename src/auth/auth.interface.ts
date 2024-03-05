import { User } from '@prisma/client';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/signup.dto';

export interface AuthServiceInterface {
  login(loginDto: LoginDto): Promise<{ access_token: string }>;
  register(registerDto: RegisterDto): Promise<User>;
}
