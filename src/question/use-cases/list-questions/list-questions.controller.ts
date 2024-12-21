import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListQuestionsService } from './list-questions.service';
import { Question } from 'src/question/entities/Question';

@ApiTags('Question')
@Controller('question')
export class ListQuestionsController {
  constructor(private readonly createQuestionService: ListQuestionsService) { }

  @Get()
  @ApiOperation({ summary: 'List all questions' })
  @ApiOkResponse({ type: Question, isArray: true })
  async create() {
    return this.createQuestionService.execute();
  }
}
