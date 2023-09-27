import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private registerDefaultNames = ['红细胞', '白细胞', '血小板'];

  constructor() {}

  public getDefaultName(): string {
    const index = Math.floor(Math.random() * this.registerDefaultNames.length);
    return this.registerDefaultNames[index];
  }
}
