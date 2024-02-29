import { Habit } from '@prisma/client';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

export interface HabitServiceInterface {
  create(createHabitDto: CreateHabitDto): Promise<Habit>;
  findAll(): Promise<Habit[]>;
  findOne(id: number): Promise<Habit>;
  update(id: number, udpdateHabitDto: UpdateHabitDto): Promise<Habit>;
  remove(id: number, label: string): Promise<Habit>;
}
