import { ApiProperty } from '@nestjs/swagger';
import { Question } from 'src/common/entities/Question';

export class ListQuestionsResponseDto extends Question {
  @ApiProperty()
  author_name: string;
}
