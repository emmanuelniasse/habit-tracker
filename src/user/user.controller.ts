import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signupUser(@Body() userData: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: +id });
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string, // string by default, to convert to number, use +id
    @Body() userUpdated: UpdateUserDto,
  ): Promise<UserModel> {
    try {
      const updatedUser = await this.userService.updateUser(+id, userUpdated);
      return updatedUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser({ id: +id });
  }

  // TODOO : Virer d'ici mais en attendant laisse
  @Get('option-key')
  getConfigOptionKey(): string {
    return this.userService.getConfigOptionKey();
  }
}
