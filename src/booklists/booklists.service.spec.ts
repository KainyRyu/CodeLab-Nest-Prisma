import { Test, TestingModule } from '@nestjs/testing';
import { BooklistsService } from './booklists.service';

describe('BooklistsService', () => {
  let service: BooklistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooklistsService],
    }).compile();

    service = module.get<BooklistsService>(BooklistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
