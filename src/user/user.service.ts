import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { ConfigService } from '../config/config.service';
import { PrismaService } from '../prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserServiceInterface } from './user.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {}

  async users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async updateUser(id: number, updateUserData: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: { id: id },
      data: updateUserData as Prisma.UserUpdateInput,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<void> {
    await this.prisma.user.delete({
      where,
    });
  }

  // TODO : Move it in another file
  getConfigOptionKey() {
    const value = this.configService.getOptionKey();
    return `Hello ${value}`;
  }
}
