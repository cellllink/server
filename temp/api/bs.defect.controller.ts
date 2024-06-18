import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('ApiBsDefect')
@Controller('/api/bs/defect')
export class BsDefectController {
  constructor() {}
}
