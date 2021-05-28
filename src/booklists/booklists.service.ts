import { Injectable } from '@nestjs/common';
import { CreateBooklistDto } from './dto/create-booklist.dto';
import { UpdateBooklistDto } from './dto/update-booklist.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class BooklistsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.BooklistCreateInput) {
    return this.prisma.booklist.create({
      data,
    });
  }

  findAll() {
    return `This action returns all booklists`;
  }

  findAllBooks() {
    return this.prisma.book.findMany();
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
