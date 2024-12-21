import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CreateQuestionDto } from 'src/question/use-cases/create-question/create-question.dto';
import { ListQuestionsService } from './list-questions.service';

@Controller('question')
export class ListQuestionsController {
  constructor(private readonly createQuestionService: ListQuestionsService) { }

  @Get()
  @ApiOperation({ summary: 'Create a question' })
  @ApiOkResponse({ type: CreateQuestionDto })
  async create() {
    return this.createQuestionService.execute();
  }
}
