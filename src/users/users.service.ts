import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { posts: true },
    });
  }

  update(id: number, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data,
      include: { posts: true },
    });
  }

  async remove(id: number) {
    const deletedPosts = this.prisma.post.deleteMany({ where: { id } });
    const deletedUser = this.prisma.user.delete({ where: { id } });
    const transaction = await this.prisma.$transaction([
      deletedPosts,
      deletedUser,
    ]);
  }
}
