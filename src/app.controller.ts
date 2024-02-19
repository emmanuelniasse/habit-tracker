import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('message/:username')
  getGreetings(@Param('username') username: string): string {
    return `Hello, ${username}!`;
  }

  @Post('message')
  createMessage(@Body() messageData: { msg: string; author: string }) {
    return messageData;
  }

  @Get('users')
  getUsers(): string {
    return this.userService.getUsers();
  }
}
