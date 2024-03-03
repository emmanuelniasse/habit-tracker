import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DynamicConfigModule } from './config/config.module';
import { HabitModule } from './habit/habit.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Permet de rendre la config globale, par exemple les variables d'environnement partout où le ConfigModule sera importé.
    }),
    UserModule,
    HabitModule,
    AuthModule,
    DynamicConfigModule.register({ key: 'tst' }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
