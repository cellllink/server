import { Module } from '@nestjs/common';
import { DatabaseModule } from 'packages/database/database.module';

import { UserDaoService, CoreDaoServcie } from './service';

const Services = [UserDaoService, CoreDaoServcie];

@Module({
  imports: [DatabaseModule],
  providers: [...Services],
  exports: [...Services],
})
export class DaoModule {}
