import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class UserService {
  constructor(private configService: ConfigService) {}

  getUsers() {
    const value = this.configService.get();
    return `Hello ${value}`;
  }
}
