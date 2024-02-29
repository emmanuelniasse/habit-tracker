import { Test, TestingModule } from '@nestjs/testing';
import { PosttController } from './postt.controller';
import { PosttService } from './postt.service';

describe('PosttController', () => {
  let controller: PosttController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PosttController],
      providers: [PosttService],
    }).compile();

    controller = module.get<PosttController>(PosttController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
