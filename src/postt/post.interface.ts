import { Postt } from '@prisma/client';
import { CreatePosttDto } from './dto/create-postt.dto';
import { UpdatePosttDto } from './dto/update-postt.dto';

export interface PosttServiceInterface {
  create(createPosttDto: CreatePosttDto): Promise<Postt>;
  findAll(): Promise<Postt[]>;
  findOne(id: number): Promise<Postt>;
  update(id: number, udpdatePosttDto: UpdatePosttDto): Promise<Postt>;
  remove(id: number, label: string): Promise<Postt>;
}
