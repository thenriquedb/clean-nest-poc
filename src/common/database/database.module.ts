import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from 'src/common/database/repositories/user.repository';
import { QuestionRepository } from 'src/common/database/repositories/question.repository';

@Module({
  providers: [PrismaService, UserRepository, QuestionRepository],
  exports: [PrismaService, UserRepository, QuestionRepository],
})
export class DatabaseModule { }
