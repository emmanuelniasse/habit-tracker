import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

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
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error ? error.message : 'An error occured',
      );
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser({ id: +id });
  }

  // TODO : Move it in another file
  @Get('option-key')
  getConfigOptionKey(): string {
    return this.userService.getConfigOptionKey();
  }
}
