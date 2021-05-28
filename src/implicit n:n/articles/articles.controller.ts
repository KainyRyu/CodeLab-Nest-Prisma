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
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    const { title, content, tags } = createArticleDto;
    const connectOrCreate = tags.map((tag) => ({
      where: { label: tag },
      create: { label: tag },
    }));
    const data: Prisma.ArticleCreateInput = {
      title,
      content,
      tags: { connectOrCreate },
    };

    return this.articleService.create(data);
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.articleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateArticleDto: UpdateArticleDto) {
    const connectOrCreate = updateArticleDto.tags?.map((tag) => ({
      where: { label: tag },
      create: { label: tag },
    }));
    const data: Prisma.ArticleUpdateInput = {
      ...updateArticleDto,
      tags: { set: [], connectOrCreate },
    };
    return this.articleService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.articleService.remove(id);
  }
}
