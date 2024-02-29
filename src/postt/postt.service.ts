import { Injectable } from '@nestjs/common';
import { Postt, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreatePosttDto } from './dto/create-postt.dto';
import { UpdatePosttDto } from './dto/update-postt.dto';
import { PosttServiceInterface } from './post.interface';

@Injectable()
export class PosttService implements PosttServiceInterface {
  constructor(private prisma: PrismaService) {}

  async create(createPosttDto: CreatePosttDto) {
    return this.prisma.postt.create({
      data: createPosttDto as Prisma.PosttCreateInput,
    });
  }

  async findAll(): Promise<Postt[]> {
    return this.prisma.postt.findMany();
  }

  async findOne(id: number): Promise<Postt> {
    return this.prisma.postt.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, udpdatePosttDto: UpdatePosttDto): Promise<Postt> {
    return this.prisma.postt.update({
      where: { id: id },
      data: udpdatePosttDto as Prisma.PosttUpdateInput,
    });
  }

  async remove(id: number): Promise<Postt> {
    return this.prisma.postt.delete({
      where: { id: id },
    });
  }
}
