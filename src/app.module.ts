import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { HabitModule } from './habit/habit.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, HabitModule, HabitModule],
  controllers: [AppController],
  providers: [],
})
@Module({
  imports: [ConfigModule.register({ key: 'tst' }), UserModule],
})
export class AppModule {}
