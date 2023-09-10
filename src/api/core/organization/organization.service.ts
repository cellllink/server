import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from '@database/dao';

@Injectable()
export class OrganizationService {
  constructor(private coreDaoServcie: CoreDaoServcie) {}
}
