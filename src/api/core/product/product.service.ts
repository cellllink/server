import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from 'packages/dao/service';
import { BaseException } from 'src/share/httpException';

@Injectable()
export class ProductService {
  constructor(private coreDaoServcie: CoreDaoServcie) {}
}
