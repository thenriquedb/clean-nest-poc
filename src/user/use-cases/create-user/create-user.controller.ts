import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { CreateUserService } from './create-user.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/entities/User';

@ApiTags('User')
@Controller('user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) { }

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiOkResponse({ type: User })
  async create(@Body() data: CreateUserDto) {
    return this.createUserService.execute(data);
  }
}
