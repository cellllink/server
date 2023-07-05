import { Injectable } from '@nestjs/common';
import {
  CoOrganizationUserStatusEnum,
  PCoOrganizationPo,
  PCoOrganizationUserPo,
} from 'packages/database';
import { CoOrganizationDaoServiceImpl } from './co.organization.dao.service.impl';

@Injectable()
export class CoOrganizationDaoService implements CoOrganizationDaoServiceImpl {
  findOrganizationById(organizationId: number): PCoOrganizationPo {}

  findOrganizationUser(
    organizationId: number,
    userId: number,
    status?: CoOrganizationUserStatusEnum,
  ): PCoOrganizationUserPo {}

  findOrganizationUsers(organizationId: number): PCoUserPos {}

  findOrganizationTeam(organizationId: number, teamId: number): PCoTeamPo {}

  findOrganizationTeams(organizationId: number): PCoTeamPos {}

  findOrganizationProduct(organizationId: number, productId: number): POrgProductPo {}

  findOrganizationProducts(organizationId: number): POrgProductPos {}
}
