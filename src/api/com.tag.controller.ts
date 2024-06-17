import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('ApiCom')
@Controller('/api/com/tag')
export class ComTagController {
  constructor() {}
}
