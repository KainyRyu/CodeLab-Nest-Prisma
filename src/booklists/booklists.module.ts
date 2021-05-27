import { Module } from '@nestjs/common';
import { BooklistsService } from './booklists.service';
import { BooklistsController } from './booklists.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [BooklistsController],
  providers: [BooklistsService, PrismaService],
})
export class BooklistsModule {}
