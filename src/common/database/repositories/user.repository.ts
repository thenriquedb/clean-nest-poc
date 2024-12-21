import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateUserDto } from 'src/user/use-cases/create-user/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async findByEmail(email: string, select?: Prisma.UserSelect) {
    return this.prismaService.user.findUnique({
      where: { email },
      select,
    });
  }

  async findById(id: string, select?: Prisma.UserSelect) {
    return this.prismaService.user.findFirst({
      where: { id },
      select,
    });
  }

  async create(data: CreateUserDto) {
    return this.prismaService.user.create({
      data,
    });
  }

  async list(select?: Prisma.UserSelect) {
    return this.prismaService.user.findMany({
      select,
    });
  }
}
