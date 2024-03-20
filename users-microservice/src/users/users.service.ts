import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/CreateUserDto';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User) private usersRepository: Repository<User>,
	) {}

	createUser(createuserDto: CreateUserDto) {
		const newUser = this.usersRepository.create(createuserDto);
		return this.usersRepository.save(newUser);
	}

	getUserById(userId: string) {
		return this.usersRepository.findOne({
			where: { id: userId },
			relations: ['payments'],
		});
	}
}
