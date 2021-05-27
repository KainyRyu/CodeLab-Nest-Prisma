import { Test, TestingModule } from '@nestjs/testing';
import { BooklistsController } from './booklists.controller';
import { BooklistsService } from './booklists.service';

describe('BooklistsController', () => {
  let controller: BooklistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooklistsController],
      providers: [BooklistsService],
    }).compile();

    controller = module.get<BooklistsController>(BooklistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
