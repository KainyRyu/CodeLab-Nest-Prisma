import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.PostCreateInput) {
    return this.prisma.post.create({ data, include: { tags: true } });
  }

  findAll() {
    return this.prisma.post.findMany({ include: { tags: true } });
  }

  findAllTags() {
    return this.prisma.tag.findMany({ include: { posts: true } });
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.PostUpdateInput) {
    return this.prisma.post.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id }, include: { tags: true } });
  }
}
