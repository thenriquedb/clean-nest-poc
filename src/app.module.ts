import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [UserModule, CommonModule, QuestionModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
