import { Module } from '@nestjs/common';
import { PostService } from 'src/post/post.service';
import { PrismaService } from 'src/prisma.service';
import { PostController } from './post.controller';

@Module({
  providers: [PostService, PrismaService],
  controllers: [PostController],
  exports: [PostService],
})
export class PostModule {}
