import { BadRequestException, Injectable } from '@nestjs/common';
import { QuestionRepository } from 'src/common/database/repositories/question.repository';
import { UserRepository } from 'src/common/database/repositories/user.repository';
import { CreateQuestionDto } from 'src/question/use-cases/create-question/create-question.dto';

@Injectable()
export class CreateQuestionService {
  constructor(
    private readonly questionRepository: QuestionRepository,
    private readonly userRepository: UserRepository,
  ) { }

  async execute(data: CreateQuestionDto) {
    const { title, authorId, content, slug } = data;

    const user = await this.userRepository.findById(authorId);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return this.questionRepository.create({
      title,
      authorId,
      content,
      slug,
    });
  }
}
