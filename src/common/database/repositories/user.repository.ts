import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/database/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return this.prismaService.user.findFirst({
      where: { id },
      omit: {
        password: true,
      },
    });
  }

  async create(data: { name: string; email: string; password: string }) {
    return this.prismaService.user.create({
      data,
    });
  }

  async list() {
    return this.prismaService.user.findMany({
      omit: {
        password: true,
      },
    });
  }
}
