import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.PostCreateInput) {
    return this.prisma.post.create({ data });
  }

  findAll() {
    return this.prisma.post.findMany({ include: { author: true } });
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  update(id: number, data: Prisma.PostUpdateInput) {
    return this.prisma.post.update({
      where: { id },
      data,
      include: { author: true },
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where: { id },
      include: { author: true },
    });
  }
}
