import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('ApiCoOrganization')
@Controller('/api/co/organization')
export class CoOrganizationController {
  constructor() {}
}
