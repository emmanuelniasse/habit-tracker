import { Prisma, User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

export interface UserServiceInterface {
  users(): Promise<User[]>;
  user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User>;
  updateUser(id: number, udpdateUserData: UpdateUserDto): Promise<User>;
  deleteUser(where: Prisma.UserWhereUniqueInput): Promise<void>;
}
