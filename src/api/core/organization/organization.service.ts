import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from 'packages/dao/service';

@Injectable()
export class OrganizationService {
  constructor(private coreDaoServcie: CoreDaoServcie) {}
}
