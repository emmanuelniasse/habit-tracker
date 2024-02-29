import { IsEmail, IsString, ValidateNested } from 'class-validator';
import { CreatePosttDto } from 'src/postt/dto/create-postt.dto';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @ValidateNested({ each: true })
  posts?: CreatePosttDto[];
}
