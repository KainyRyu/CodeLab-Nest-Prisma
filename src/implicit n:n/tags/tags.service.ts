// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../../prisma.service';
// import { Prisma } from '.prisma/client';

// @Injectable()
// export class TagsService {
//   constructor(private readonly prisma: PrismaService) {}

//   findAll() {
//     return this.prisma.tag.findMany({ include: { articles: true } });
//   }

//   findOne(id: number) {
//     return this.prisma.tag.findUnique({
//       where: { id },
//       include: { articles: true },
//     });
//   }

//   remove(id: number) {
//     return this.prisma.tag.delete({ where: { id } });
//   }
// }
