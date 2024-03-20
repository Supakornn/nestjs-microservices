import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUserDto';
import { UsersService } from './users.service';

@Controller()
export class UsersMicroserviceController {
	constructor(private userService: UsersService) {}

	@MessagePattern({ cmd: 'createUser' })
	createUser(@Payload() data: CreateUserDto) {
		console.log(data);
		return this.userService.createUser(data);
	}

	@MessagePattern({ cmd: 'getUserById' })
	getUerById(@Payload() data) {
		const { userId } = data;
		return this.userService.getUserById(userId);
	}

	@EventPattern('paymentCreated')
	paymentCreated(@Payload() data: any) {
		console.log(data);
	}
}
