import { Injectable } from '@nestjs/common';
import { QuestionRepository } from 'src/common/database/repositories/question.repository';

@Injectable()
export class ListQuestionsService {
  constructor(private readonly questionRepository: QuestionRepository) { }

  async execute() {
    return this.questionRepository.list();
  }
}
