import {
  IsBoolean,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateHabitDto {
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  label: string;

  @IsString()
  @MinLength(2)
  @MaxLength(200)
  description?: string;

  @IsBoolean()
  completed: boolean;

  @IsNumber()
  @Min(1)
  authorId: number;

  author: { connect: { id: number } };
}
