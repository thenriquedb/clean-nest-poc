import { User as PrismaUser } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class User implements PrismaUser {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  password: string;
}
