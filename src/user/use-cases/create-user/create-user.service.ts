import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserRepository } from 'src/common/database/repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(data: CreateUserDto) {
    const { email, name, password } = data;

    return this.userRepository.create({
      email,
      name,
      password,
    });
  }
}
