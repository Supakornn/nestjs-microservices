import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PaymentModule } from './payments/payments.module';
import { Payment } from './typeorm/entities/Payment';
import { User } from './typeorm/entities/User';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'mysql_db',
			port: 3307,
			database: 'nestjs-db',
			entities: [Payment, User],
			synchronize: true,
			username: 'testuser',
			password: 'testuser1234',
		}),
		PaymentModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
