import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { PostService } from 'src/post/post.service';
import { PrismaService } from '../prisma.service';
import { UserController } from './user.controller';
import { LoggerMiddleware } from './user.middleware';
import { UserService } from './user.service';

@Module({
  providers: [UserService, PrismaService, PostService],
  controllers: [UserController],
  exports: [UserService],
  imports: [
    ConfigModule.register({
      key: 'Valeur de `options`',
    }),
  ],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
