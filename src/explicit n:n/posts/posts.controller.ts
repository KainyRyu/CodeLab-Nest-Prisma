import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Prisma } from '.prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    const { title, tags } = createPostDto;
    const create = tags.map((tag) => ({
      tag: {
        connectOrCreate: {
          create: { name: tag },
          where: { name: tag },
        },
      },
    }));
    const data: Prisma.PostCreateInput = { title, tags: { create } };

    return this.postsService.create(data);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get('tags')
  findAllTags() {
    return this.postsService.findAllTags();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    const create = updatePostDto.tags?.map((tag) => ({
      tag: {
        connectOrCreate: {
          create: { name: tag },
          where: { name: tag },
        },
      },
    }));
    const data: Prisma.PostUpdateInput = {
      ...updatePostDto,
      tags: { set: [], create },
    };
    return this.postsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.postsService.remove(id);
  }
}
