import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserRepository } from 'src/common/database/repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(data: CreateUserDto) {
    const { email, name, password } = data;

    const userWithTheSameEmail = await this.userRepository.findByEmail(email);

    if (userWithTheSameEmail) {
      throw new ConflictException('User with the same email already exists');
    }

    const createdUser = await this.userRepository.create({
      email,
      name,
      password,
    });

    return {
      id: createdUser.id,
      email: createdUser.email,
      name: createdUser.name,
    };
  }
}
