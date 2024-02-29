import { IsString, ValidateNested } from 'class-validator';
import { CreatePosttDto } from 'src/postt/dto/create-postt.dto';

export class UpdateUserDto {
  @IsString()
  name: string;

  @ValidateNested({ each: true })
  posts?: CreatePosttDto[];
}
