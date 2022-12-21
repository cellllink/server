import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  constructor() {}

  test() {
    console.log('test');
  }
}
