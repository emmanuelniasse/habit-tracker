import { CreatePosttDto } from 'src/postt/dto/create-postt.dto';

export class CreateUserDto {
  email: string;
  name: string;
  posts: CreatePosttDto[];
}
