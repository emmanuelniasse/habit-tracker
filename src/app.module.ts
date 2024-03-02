import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DynamicConfigModule } from './config/config.module';
import { HabitModule } from './habit/habit.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    HabitModule,
    AuthModule,
    ConfigModule,
    DynamicConfigModule.register({ key: 'tst' }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
