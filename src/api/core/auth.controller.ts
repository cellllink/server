import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './auth.dto';

@ApiTags('Auth')
@Controller('/api/core/auth')
export class AuthController {
  // 注册
  @Post('register')
  @ApiBody({ type: RegisterDto })
  async register(@Body() dto: RegisterDto) {
    // return this.userService.register(dto);
  }
}
