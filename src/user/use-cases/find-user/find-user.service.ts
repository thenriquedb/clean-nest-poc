import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from 'src/common/database/repositories/user.repository';

@Injectable()
export class FindUserService {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
