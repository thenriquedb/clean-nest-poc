import { Injectable } from '@nestjs/common';
import { Question } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateQuestionDto } from 'src/question/use-cases/create-question/create-question.dto';

@Injectable()
export class QuestionRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(data: CreateQuestionDto) {
    return this.prismaService.question.create({
      data,
    });
  }

  async list(): Promise<Array<Question & { authorName: string }>> {
    return this.prismaService.$queryRaw`
        SELECT 
          questions.title,
          questions.content,
          questions.created_at, 
          questions.updated_at,
          questions.author_id,
          questions.slug,
          users.name as authorName
        FROM questions 
        LEFT JOIN users ON questions.author_id = users.id
      `;
  }
}

const qr = new QuestionRepository(new PrismaService());
qr.list().then(r => r[1].)