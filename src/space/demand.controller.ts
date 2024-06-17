import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Space-demand')
@Controller('/space/demand')
export class DemandController {
  constructor() {}

  @ApiBody({ description: 'list' })
  @Post('list')
  async list() {}

  @ApiBody({ description: 'create' })
  @Post('create')
  async create() {}

  @ApiBody({ description: 'edit' })
  @Post('edit')
  async edit() {}

  @ApiBody({ description: 'remove' })
  @Post('remove')
  async remove() {}
}
