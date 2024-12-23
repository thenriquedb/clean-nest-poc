import { Controller, Get, Param } from '@nestjs/common';
import { FindUserService } from './find-user.service';
import { FindUserDto } from 'src/user/use-cases/find-user/find-user.dto';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/common/entities/User';

@ApiTags('User')
@Controller('user')
export class FindUserController {
  constructor(private readonly findUserService: FindUserService) { }

  @ApiOperation({ summary: 'Find a user by id' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({ type: User })
  @Get(':id')
  async find(@Param() params: FindUserDto) {
    const { id } = params;
    const user = await this.findUserService.execute(id);
    return user;
  }
}
