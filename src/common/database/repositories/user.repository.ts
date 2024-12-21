import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateUserDto } from 'src/user/use-cases/create-user/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async findByEmail(email: string, omit?: Prisma.UserOmit) {
    return this.prismaService.user.findUnique({ where: { email }, omit });
  }

  async findById(id: string, omit?: Prisma.UserOmit) {
    return this.prismaService.user.findFirst({
      where: { id },
      omit,
    });
  }

  async create(data: CreateUserDto) {
    return this.prismaService.user.create({
      data,
    });
  }

  async list(omit?: Prisma.UserOmit) {
    return this.prismaService.user.findMany({
      omit,
    });
  }
}
