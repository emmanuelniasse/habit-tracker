import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { ConfigService } from '../config/config.service';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: createUserDto as Prisma.UserCreateInput,
    });
  }

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

  // TODOO : Virer d'ici mais en attendant laisse
  getConfigOptionKey() {
    const value = this.configService.getOptionKey();
    return `Hello ${value}`;
  }
}
