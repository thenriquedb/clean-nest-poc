import { Controller, Get } from '@nestjs/common';
import { ListUsersService } from 'src/user/use-cases/list-users/list-users.service';

@Controller('user')
export class ListUsersController {
  constructor(private readonly listUsersService: ListUsersService) { }

  @Get()
  async list() {
    return this.listUsersService.execute();
  }
}
