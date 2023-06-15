import { Module } from '@nestjs/common';
import { DaoModule } from 'packages/dao/dao.module';
import { BusinessControllers, BusinessServices } from './business';
import { CoreControllers, CoreServices } from './core';

@Module({
  imports: [DaoModule],
  controllers: [...CoreControllers, ...BusinessControllers],
  providers: [...CoreServices, ...BusinessServices],
})
export class ApiModule {}
