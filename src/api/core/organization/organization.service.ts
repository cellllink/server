import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from '@database/dao/service';

@Injectable()
export class OrganizationService {
  constructor(private coreDaoServcie: CoreDaoServcie) {}
}
