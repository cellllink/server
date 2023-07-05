import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from 'packages/database/database.module';

import { UserDaoService, CoreDaoServcie } from './service';

const Services = [UserDaoService, CoreDaoServcie];

@Global()
@Module({
  imports: [DatabaseModule],
  providers: [...Services],
  exports: [...Services],
})
export class DaoModule {}
