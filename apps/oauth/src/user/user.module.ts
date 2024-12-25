import { Module } from '@nestjs/common';

import { DBModule } from '@db/db.module';

import { AuthController } from './user.controller';

@Module({
  imports: [DBModule],
  controllers: [AuthController],
  providers: [AuthController],
})
export class UserModule {}
