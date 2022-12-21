import { Injectable } from '@nestjs/common';
import { DaoService } from 'src/daos';
import {
  OrganizationCreateDto,
  OrganizationInfoEditDto,
  OrganizationAddOrRemoveMemberDto,
} from './organization.dto';
import { User } from 'src/daos/entities';

@Injectable()
export class OrganizationService {
  private defaultOrganizationLogo = 'http://115.29.243.9/cell/favicon.svg';

  constructor(private dao: DaoService) {}

  // 创建组织
  async create(organizationCreateDto: OrganizationCreateDto, user?: User) {
    user = user || (await this.dao.user.findOneById(organizationCreateDto.owner_id));

    const organization = await this.dao.organization.createOrganization({
      owner_id: user.id,
      name: user.name + '的组织',
      logo: this.defaultOrganizationLogo,
    });

    await this.dao.organization.linkOrganizationUser({
      organization_id: organization.id,
      user_id: user.id,
    });
  }

  async info(organization_id: number) {
    return await this.dao.organization.findOneById(organization_id);
  }

  async infoEdit(organizationInfoEditDto: OrganizationInfoEditDto) {
    const organization = await this.dao.organization.findOneById(organizationInfoEditDto.id);

    await this.dao.organization.repository.organization.save({
      ...organization,
      ...organizationInfoEditDto,
    });
  }

  async addMember(organizationAddOrRemoveMemberDto: OrganizationAddOrRemoveMemberDto) {
    return this.dao.organization.repository.organizationOuterUser.save(
      organizationAddOrRemoveMemberDto,
    );
  }

  async removeMember(organizationAddOrRemoveMemberDto: OrganizationAddOrRemoveMemberDto) {
    const organization = await this.dao.organization.repository.organizationOuterUser.findOne({
      where: organizationAddOrRemoveMemberDto,
    });
    await this.dao.organization.repository.organizationOuterUser.remove(organization);
    return null;
  }
}
