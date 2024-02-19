import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private value: string;

  constructor(@Inject('CONFIG_OPTIONS') private options: { key: string }) {
    this.value = options.key;
  }
  get(): string {
    return this.value;
  }
}
