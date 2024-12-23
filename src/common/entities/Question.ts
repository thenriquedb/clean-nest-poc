import { ApiProperty } from '@nestjs/swagger';
import { Question as PrismaQuestion } from '@prisma/client';

export class Question implements PrismaQuestion {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  authorId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  author_name: string;

  @ApiProperty()
  updatedAt: Date;
}
