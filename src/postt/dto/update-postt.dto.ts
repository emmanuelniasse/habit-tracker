import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreatePosttDto } from './create-postt.dto';

export class UpdatePosttDto extends PartialType(CreatePosttDto) {
  @IsString()
  label: string;
}
