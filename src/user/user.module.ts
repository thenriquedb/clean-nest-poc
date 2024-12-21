import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import {
  CreateUserController,
  CreateUserService,
} from './use-cases/create-user';
import { ListUsersController, ListUsersService } from './use-cases/list-users';
import { FindUserController, FindUserService } from './use-cases/find-user';
import { UserRepository } from '../common/database/repositories/user.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUserController, ListUsersController, FindUserController],
  providers: [
    CreateUserService,
    ListUsersService,
    FindUserService,
    UserRepository,
  ],
})
export class UserModule { }
