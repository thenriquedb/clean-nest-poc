import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateQuestionDto } from 'src/question/use-cases/create-question/create-question.dto';
import { CreateQuestionService } from 'src/question/use-cases/create-question/create-question.service';

@ApiTags('Question')
@Controller('question')
export class CreateQuestionController {
  constructor(private readonly createQuestionService: CreateQuestionService) { }

  @Post()
  @ApiOperation({ summary: 'Create a question' })
  @ApiOkResponse({ type: CreateQuestionDto })
  async create(@Body() data: CreateQuestionDto) {
    return this.createQuestionService.execute(data);
  }
}
