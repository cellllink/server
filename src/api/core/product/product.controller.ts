import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoreDaoServcie } from 'packages/dao/service';
import { CommonOrganizationDto, CommonUserDto } from 'src/share/dto/api.common.dto';
import { JwtAuthGuard } from 'src/share/guide';
import { BaseException } from 'src/share/httpException';
import { ProductService } from './product.service';

@ApiTags('CoreProduct')
@UseGuards(JwtAuthGuard)
@Controller('/api/core/product')
export class ProductController {
  constructor(private coreDaoServcie: CoreDaoServcie, private productService: ProductService) {}
}
