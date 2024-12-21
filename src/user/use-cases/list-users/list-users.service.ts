import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/common/database/repositories/user.repository';

@Injectable()
export class ListUsersService {
  constructor(private readonly userRepository: UserRepository) { }

  async execute() {
    return this.userRepository.list({
      email: true,
      name: true,
      id: true,
      password: false,
    });
  }
}
