import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from '@database/dao';
import { BaseException } from 'src/share/httpException';

@Injectable()
export class ProductService {
  constructor(private coreDaoServcie: CoreDaoServcie) {}
}
