import { Controller, Get, Param } from '@nestjs/common';
import { FindUserService } from './find-user.service';
import { FindUserDto } from 'src/user/use-cases/find-user/find-user.dto';

@Controller('user')
export class FindUserController {
  constructor(private readonly findUserService: FindUserService) { }

  @Get(':id')
  async find(@Param() params: FindUserDto) {
    const { id } = params;
    const user = await this.findUserService.execute(id);
    return user;
  }
}
