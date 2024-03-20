import { PaymentsModule } from './payments/payments.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';

@Module({
	imports: [UsersModule, PaymentsModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
