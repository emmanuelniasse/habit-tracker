import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePosttDto } from './dto/create-postt.dto';
import { UpdatePosttDto } from './dto/update-postt.dto';
import { PosttService } from './postt.service';

@Controller('postt')
export class PosttController {
  constructor(private readonly posttService: PosttService) {}

  @Post()
  create(@Body() createPosttDto: CreatePosttDto) {
    return this.posttService.create(createPosttDto);
  }

  @Get()
  findAll() {
    return this.posttService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.posttService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePosttDto: UpdatePosttDto) {
    return this.posttService.update(+id, updatePosttDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.posttService.remove(+id);
  }
}
