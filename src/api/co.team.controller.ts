import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('ApiCoTeam')
@Controller('/api/co/team')
export class CoTeamController {
  constructor() {}
}
