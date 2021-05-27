import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.ArticleCreateInput) {
    return 'This action adds a new article';
  }

  findAll() {
    return this.prisma.article.findMany({ include: { tags: true } });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({
      where: { id },
      include: { tags: true },
    });
  }

  update(id: number, data: Prisma.ArticleUpdateInput) {
    return `This action updates a #${id} article`;
  }

  async remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
