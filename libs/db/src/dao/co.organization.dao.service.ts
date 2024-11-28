import { Injectable } from '@nestjs/common';

import {
  CoOrganizationUserStatusEnum,
  PCoOrganizationPo,
  PCoOrganizationUserPo,
  PCoTeamPo,
  PCoTeamPos,
  PCoUserPos,
  // POrgProductPo,
  // POrgProductPos,
} from '@db/structure/core';
import { CoreRepository } from './repository';
import dayjs from 'dayjs';

interface CoOrganizationDaoServiceImpl {
  // 通过 id 查询组织
  findOrganizationById(organizationId: number): PCoOrganizationPo;

  // 查询组织的指定成员<默认: 在职的>
  findOrganizationUser(organizationId: number, userId: number, status?: CoOrganizationUserStatusEnum): PCoOrganizationUserPo;

  // 查询组织的成员列表<默认: 在职的>
  findOrganizationUsers(organizationId: number): PCoUserPos;

  // 查询组织的指定团队
  findOrganizationTeam(organizationId: number, teamId: number): PCoTeamPo;

  // 查询组织的团队列表
  findOrganizationTeams(organizationId: number): PCoTeamPos;

  // // 查询组织的指定产品
  // findOrganizationProduct(organizationId: number, productId: number): POrgProductPo;

  // // 查询组织的产品列表
  // findOrganizationProducts(organizationId: number): POrgProductPos;
}

@Injectable()
export class CoOrganizationDaoService implements CoOrganizationDaoServiceImpl {
  constructor(private coreRepository: CoreRepository) {}

  findOrganizationById(organizationId: number): PCoOrganizationPo {
    return new Promise(() => {});
  }

  findOrganizationUser(organizationId: number, userId: number, status?: CoOrganizationUserStatusEnum): PCoOrganizationUserPo {
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

  // findOrganizationProduct(organizationId: number, productId: number): POrgProductPo {
  //   return new Promise(() => {});
  // }

  // findOrganizationProducts(organizationId: number): POrgProductPos {
  //   return new Promise(() => {});
  // }

  // 创建组织
  async create(owner_user_id: number) {
    const organization = await this.coreRepository.organization.save({
      owner_user_id,
      name: '',
      logo: '',
    });
    await this.coreRepository.organizationUser.save({
      organization_id: organization.id,
      user_id: owner_user_id,
      join_time: dayjs().format('YYYY-MM-DD mm:HH:ss'),
      status: CoOrganizationUserStatusEnum.onJob,
    });
  }
}
