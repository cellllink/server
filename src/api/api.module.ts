import { Module } from '@nestjs/common';
import { DaoModule } from 'packages/dao/dao.module';
import { Controllers } from './core';

@Module({
  imports: [DaoModule],
  controllers: [...Controllers],
  providers: [],
})
export class ApiModule {}
