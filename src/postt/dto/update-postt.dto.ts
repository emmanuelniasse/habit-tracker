import { PartialType } from '@nestjs/mapped-types';
import { CreatePosttDto } from './create-postt.dto';

export class UpdatePosttDto extends PartialType(CreatePosttDto) {
  label: string;
}
