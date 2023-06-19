import { Module } from '@nestjs/common';
import { DaoModule } from 'packages/dao/dao.module';
import { TestService } from './test.service';

@Module({
  imports: [DaoModule],
  controllers: [],
  providers: [TestService],
})
export class TestModule {}
