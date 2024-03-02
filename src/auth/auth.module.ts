import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      // secret: process.env.JWT_SECRET_PASSPHRASE,
      //TODOO : https://docs.nestjs.com/techniques/configuration
      secret: process.env.JWT_SECRET_PASSPHRASE,
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
  ],

  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
