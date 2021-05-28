import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Prisma } from '.prisma/client';
import { BooklistsService } from './booklists.service';
import { CreateBooklistDto } from './dto/create-booklist.dto';
import { UpdateBooklistDto } from './dto/update-booklist.dto';

@Controller('booklists')
export class BooklistsController {
  constructor(private readonly booklistsService: BooklistsService) {}

  @Post()
  create(@Body() createBooklistDto: CreateBooklistDto) {
    return this.booklistsService.create({
      label: createBooklistDto.label,
    });
  }

  @Get()
  findAll() {
    return this.booklistsService.findAll();
  }

  @Get('/books')
  findAllBooks() {
    return this.booklistsService.findAllBooks();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.booklistsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateBooklistDto: UpdateBooklistDto,
  ) {
    return this.booklistsService.update(id, updateBooklistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.booklistsService.remove(id);
  }
}
