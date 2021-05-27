import { Injectable } from '@nestjs/common';
import { CreateBooklistDto } from './dto/create-booklist.dto';
import { UpdateBooklistDto } from './dto/update-booklist.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BooklistsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBooklistDto: CreateBooklistDto) {
    return 'This action adds a new booklist';
  }

  findAll() {
    return `This action returns all booklists`;
  }

  findAllBooks() {
    return `This action returns all booklists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booklist`;
  }

  update(id: number, updateBooklistDto: UpdateBooklistDto) {
    return `This action updates a #${id} booklist`;
  }

  remove(id: number) {
    return `This action removes a #${id} booklist`;
  }
}
