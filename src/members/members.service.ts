import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../dist/members/prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.MemberCreateInput) {
    return this.prisma.member.create({
      data,
      include: {
        profile: true,
      },
    });
  }

  findAll() {
    return this.prisma.member.findMany({ include: { profile: true } });
  }

  findOne(id: number) {
    return this.prisma.member.findUnique({
      where: { id },
      include: { profile: true },
    });
  }

  update(id: number, data: Prisma.MemberUpdateInput) {
    return this.prisma.member.update({
      where: { id },
      data,
      include: { profile: true },
    });
  }

  async remove(id: number) {
    const deleteProfile = await this.prisma.profile.deleteMany({
      where: { memberId: id },
    });
    const deleteMember = await this.prisma.member.delete({ where: { id } });
  }
}
