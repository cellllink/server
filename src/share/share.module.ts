import { Module } from '@nestjs/common';
import { TestService } from './services';

const Services = [TestService];

@Module({
  imports: [],
  providers: [...Services],
  exports: [...Services],
})
export class ShareModule {}
