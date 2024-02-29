import { IsBoolean, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateHabitDto {
  @IsString()
  @Max(30)
  @Min(2)
  label: string;

  @IsString()
  @Max(200)
  @Min(2)
  description?: string;

  @IsBoolean()
  completed: boolean;

  @IsNumber()
  @Min(1)
  authorId: number;

  author: { connect: { id: number } };
}
