import { Module } from '@nestjs/common';

import { DatabaseModule } from '@database/database.module';

import { RegisterController } from './register.controller';
import { LoginController } from './login.controller';

import { LoginService } from './service/login.service';
import { RegisterService } from './service/register.service';
import { JwtModule } from 'src/share/guard/Jwt.module';

@Module({
  imports: [DatabaseModule, JwtModule],
  controllers: [RegisterController, LoginController],
  providers: [LoginService, RegisterService],
})
export class OAuthModule {}
