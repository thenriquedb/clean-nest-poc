import { ApiProperty } from '@nestjs/swagger';
import { Question } from 'src/question/entities/Question';

export class ListQuestionsResponseDto extends Question {
  @ApiProperty()
  author_name: string;
}
