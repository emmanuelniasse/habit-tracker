import { Injectable } from '@nestjs/common';
import { Habit, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { HabitServiceInterface } from './habit.interface';

@Injectable()
export class HabitService implements HabitServiceInterface {
  constructor(private prisma: PrismaService) {}

  async createHabit(createHabitDto: CreateHabitDto) {
    return this.prisma.habit.create({
      data: createHabitDto as Prisma.HabitCreateInput,
    });
  }

  async habits(id: number): Promise<Habit[]> {
    return this.prisma.habit.findMany({
      where: { authorId: id },
    });
  }

  async habit(id: number): Promise<Habit> {
    return this.prisma.habit.findUnique({
      where: { id: id },
    });
  }

  async updateHabit(
    id: number,
    udpdateHabitDto: UpdateHabitDto,
  ): Promise<Habit> {
    return this.prisma.habit.update({
      where: { id: id },
      data: udpdateHabitDto as Prisma.HabitUpdateInput,
    });
  }

  async removeHabit(id: number): Promise<Habit> {
    return this.prisma.habit.delete({
      where: { id: id },
    });
  }
}
