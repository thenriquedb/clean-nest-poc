import { Module } from '@nestjs/common';
import { QuestionRepository } from '../common/database/repositories/question.repository';
import {
  CreateQuestionController,
  CreateQuestionService,
} from './use-cases/create-question';
import {
  ListQuestionsController,
  ListQuestionsService,
} from './use-cases/list-questions';
import { DatabaseModule } from 'src/common/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateQuestionController, ListQuestionsController],
  providers: [CreateQuestionService, QuestionRepository, ListQuestionsService],
})
export class QuestionModule { }
