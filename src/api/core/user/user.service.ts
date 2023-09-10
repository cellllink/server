import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from '@database/dao';
import { OrganizationUserStatus } from 'packages/database/po/core';
import { BaseException } from 'src/share/httpException';

@Injectable()
export class UserService {
  constructor(private coreDaoServcie: CoreDaoServcie) {}

  /**
   * 处理组织的邀请
   * @param organization_id
   * @param user_id
   * @param status
   */
  async organizationInviteDeal(organization_id, user_id, status: OrganizationUserStatus) {
    const organizationUser = await this.coreDaoServcie.findOrganizationUser(
      organization_id,
      user_id,
      [OrganizationUserStatus.invite],
    );

    if (!organizationUser) throw new BaseException('该用户不存在');

    await this.coreDaoServcie.repository.organizationUser.save({
      ...organizationUser,
      status,
    });
  }
}
