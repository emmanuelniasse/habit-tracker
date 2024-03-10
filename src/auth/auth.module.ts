import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma.service';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_PASSPHRASE,
      signOptions: { expiresIn: '6000s' },
    }),
    UserModule,
    PassportModule,
  ],

  controllers: [AuthController],
  providers: [AuthService, PrismaService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
