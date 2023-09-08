import { Global, Module } from '@nestjs/common';

import { UserDaoService, CoreDaoServcie } from './service';

const Services = [UserDaoService, CoreDaoServcie];

@Global()
@Module({
  imports: [],
  providers: [...Services],
  exports: [...Services],
})
export class DaoModule {}
