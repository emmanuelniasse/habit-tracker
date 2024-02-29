export class CreatePosttDto {
  label: string;
  description: string;
  completed: boolean;
  authorId: number;
  author: { connect: { id: number } };
}
