import { Injectable } from '@nestjs/common';

import {
  CoOrganizationUserStatusEnum,
  PCoOrganizationPo,
  PCoOrganizationUserPo,
  PCoTeamPo,
  PCoTeamPos,
  PCoUserPos,
  POrgProductPo,
  POrgProductPos,
} from '@database/structure';

export interface CoOrganizationDaoServiceImpl {
  // 通过 id 查询组织
  findOrganizationById(organizationId: number): PCoOrganizationPo;

  // 查询组织的指定成员<默认: 在职的>
  findOrganizationUser(
    organizationId: number,
    userId: number,
    status?: CoOrganizationUserStatusEnum,
  ): PCoOrganizationUserPo;

  // 查询组织的成员列表<默认: 在职的>
  findOrganizationUsers(organizationId: number): PCoUserPos;

  // 查询组织的指定团队
  findOrganizationTeam(organizationId: number, teamId: number): PCoTeamPo;

  // 查询组织的团队列表
  findOrganizationTeams(organizationId: number): PCoTeamPos;

  // 查询组织的指定产品
  findOrganizationProduct(organizationId: number, productId: number): POrgProductPo;

  // 查询组织的产品列表
  findOrganizationProducts(organizationId: number): POrgProductPos;
}

@Injectable()
export class CoOrganizationDaoService implements CoOrganizationDaoServiceImpl {
  findOrganizationById(organizationId: number): PCoOrganizationPo {
    return new Promise(() => {});
  }

  findOrganizationUser(
    organizationId: number,
    userId: number,
    status?: CoOrganizationUserStatusEnum,
  ): PCoOrganizationUserPo {
    return new Promise(() => {});
  }

  findOrganizationUsers(organizationId: number): PCoUserPos {
    return new Promise(() => {});
  }

  findOrganizationTeam(organizationId: number, teamId: number): PCoTeamPo {
    return new Promise(() => {});
  }

  findOrganizationTeams(organizationId: number): PCoTeamPos {
    return new Promise(() => {});
  }

  findOrganizationProduct(organizationId: number, productId: number): POrgProductPo {
    return new Promise(() => {});
  }

  findOrganizationProducts(organizationId: number): POrgProductPos {
    return new Promise(() => {});
  }
}
