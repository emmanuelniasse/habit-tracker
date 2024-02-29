import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PosttController } from './postt.controller';
import { PosttService } from './postt.service';

@Module({
  controllers: [PosttController],
  providers: [PosttService, PrismaService],
})
export class PosttModule {}
