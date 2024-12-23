import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/entities/User';
import { ListUsersService } from 'src/user/use-cases/list-users/list-users.service';

@ApiTags('User')
@Controller('user')
export class ListUsersController {
  constructor(private readonly listUsersService: ListUsersService) { }

  @Get()
  @ApiOperation({ summary: 'List all users' })
  @ApiOkResponse({ type: User, isArray: true })
  async list() {
    return this.listUsersService.execute();
  }
}
