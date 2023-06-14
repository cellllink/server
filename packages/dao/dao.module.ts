import { Module } from '@nestjs/common';
import { DatabaseModule } from 'packages/database/database.module';

import { CoreDaoServcie } from './service';

const Services = [CoreDaoServcie];

@Module({
  imports: [DatabaseModule],
  providers: [...Services],
  exports: [...Services],
})
export class DaoModule {}
