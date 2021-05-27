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

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post(':uid/posts')
  create(@Param('uid') uid: number, @Body() createPostDto: CreatePostDto) {
    return this.postsService.create({
      ...createPostDto,
      author: { connect: { id: uid } },
    });
  }

  @Get('posts')
  findAll() {
    return this.postsService.findAll();
  }

  @Get('posts/:id')
  findOne(@Param('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Patch('posts/:id')
  update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete('posts/:id')
  remove(@Param('id') id: number) {
    return this.postsService.remove(id);
  }
}
