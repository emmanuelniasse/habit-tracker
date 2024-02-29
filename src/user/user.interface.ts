import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export interface UserServiceInterface {
  createUser(createUserDto: CreateUserDto): Promise<User>;
  users(): Promise<User[]>;
  user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User>;
  updateUser(id: number, udpdateUserData: UpdateUserDto): Promise<User>;
  deleteUser(where: Prisma.UserWhereUniqueInput): Promise<void>;
}
