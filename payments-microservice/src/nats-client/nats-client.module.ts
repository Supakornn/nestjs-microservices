import { Transport, ClientsModule } from '@nestjs/microservices';
import { Module } from '@nestjs/common';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'NATS_SERVICE',
				transport: Transport.NATS,
				options: {
					servers: ['nats://nats'],
				},
			},
		]),
	],
	exports: [
		ClientsModule.register([
			{
				name: 'NATS_SERVICE',
				transport: Transport.NATS,
				options: {
					servers: ['nats://nats'],
				},
			},
		]),
	],
})
export class NatsClientModule {}
