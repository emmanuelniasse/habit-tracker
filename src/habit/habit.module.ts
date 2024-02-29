import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { HabitController } from './habit.controller';
import { HabitService } from './habit.service';

@Module({
  controllers: [HabitController],
  providers: [HabitService, PrismaService],
})
export class HabitModule {}
