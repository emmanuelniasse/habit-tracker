import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { PosttModule } from './postt/postt.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, PosttModule, PosttModule],
  controllers: [AppController],
  providers: [],
})
@Module({
  imports: [ConfigModule.register({ key: 'tst' }), UserModule],
})
export class AppModule {}
