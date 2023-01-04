import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('api/auth')
@Controller('api/auth')
export class AuthController {}
