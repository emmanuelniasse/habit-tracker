import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { HabitService } from './habit.service';

@UseGuards(JwtAuthGuard)
@Controller('habits')
export class HabitController {
  constructor(
    private readonly habitService: HabitService,
    private jwtService: JwtService,
  ) {}

  @Post()
  create(@Body() createHabitDto: CreateHabitDto) {
    return this.habitService.createHabit(createHabitDto);
  }

  @Get()
  findAll(@Headers('authorization') authorizationHeader: string) {
    if (!authorizationHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    const token = authorizationHeader.replace('Bearer ', '');

    try {
      const decodedToken = this.jwtService.verify(token);
      return this.habitService.habits(decodedToken.id);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitService.habit(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitService.updateHabit(+id, updateHabitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitService.removeHabit(+id);
  }
}
