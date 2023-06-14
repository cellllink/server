import { Module } from '@nestjs/common';
import { Controllers } from './core';

@Module({
  imports: [],
  controllers: [...Controllers],
  providers: [],
})
export class ApiModule {}
