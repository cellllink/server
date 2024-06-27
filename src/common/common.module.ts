import { Module } from '@nestjs/common';
import { DatabaseModule } from '@database/database.module';
import { UserController } from './user.controller';
import { JwtModule } from 'src/share/guard/Jwt.module';

@Module({
  imports: [DatabaseModule, JwtModule],
  controllers: [UserController],
  providers: [],
})
export class CommonModule {}
