import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.ArticleCreateInput) {
    return this.prisma.article.create({ data, include: { tags: true } });
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
    return this.prisma.article.update({
      where: { id },
      data,
      include: { tags: true },
    });
  }

  async remove(id: number) {
    return this.prisma.article.delete({
      where: { id },
    });
  }
}
