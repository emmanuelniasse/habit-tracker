import { Habit } from '@prisma/client';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

export interface HabitServiceInterface {
  createHabit(createHabitDto: CreateHabitDto): Promise<Habit>;
  habits(id: number): Promise<Habit[]>;
  habit(id: number): Promise<Habit>;
  updateHabit(id: number, udpdateHabitDto: UpdateHabitDto): Promise<Habit>;
  removeHabit(id: number, label: string): Promise<Habit>;
}
