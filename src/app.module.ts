import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController],
  providers: [],
})
@Module({
  imports: [ConfigModule.register({ key: 'tst' }), UserModule],
})
export class AppModule {}
