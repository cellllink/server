import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('ApiAuth')
@Controller('/api/auth')
export class AuthController {
  constructor() {}
}
