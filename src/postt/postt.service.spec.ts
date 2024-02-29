import { Test, TestingModule } from '@nestjs/testing';
import { PosttService } from './postt.service';

describe('PosttService', () => {
  let service: PosttService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosttService],
    }).compile();

    service = module.get<PosttService>(PosttService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
