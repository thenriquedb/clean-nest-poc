import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListQuestionsService } from './list-questions.service';
import { ListQuestionsResponseDto } from './list-questions-response.dto';

@ApiTags('Question')
@Controller('question')
export class ListQuestionsController {
  constructor(private readonly createQuestionService: ListQuestionsService) { }

  @Get()
  @ApiOperation({ summary: 'List all questions' })
  @ApiOkResponse({ type: ListQuestionsResponseDto, isArray: true })
  async create() {
    return this.createQuestionService.execute();
  }
}
