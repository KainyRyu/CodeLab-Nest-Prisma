// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { MembersService } from './members.service';
// import { CreateMemberDto } from './dto/create-member.dto';
// import { UpdateMemberDto } from './dto/update-member.dto';
// import { Prisma } from '.prisma/client';

// @Controller('members')
// export class MembersController {
//   constructor(private readonly membersService: MembersService) {}

//   @Post()
//   create(@Body() createMemberDto: CreateMemberDto) {
//     const { name, email, nickname, bio } = createMemberDto;
//     return this.membersService.create({
//       name,
//       email,
//       nickname,
//       profile: { create: { bio } },
//     });
//   }

//   @Get()
//   findAll() {
//     return this.membersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.membersService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: number, @Body() updateMemberDto: UpdateMemberDto) {
//     const { name, email, nickname, bio } = updateMemberDto;
//     const data = {
//       name,
//       email,
//       nickname,
//       profile: { update: { bio } },
//     };
//     return this.membersService.update(id, data);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: number) {
//     const selected = this.membersService.findOne(id);
//     return this.membersService.remove(id);
//   }
// }
