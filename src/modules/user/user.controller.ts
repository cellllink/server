import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from 'src/share/guides';
// import { OrganizationService } from '../organization';
// import { UserInfoDto, UserInfoEditDto, UserLoginDto, UserRegisterDto } from './user.dto';
// import { UserService } from './user.service';
// import { LoginVo } from './user.vo';
import {
  ForgetPasswordDto,
  InfoDto,
  InfoEditDto,
  LoginDto,
  RegisterDto,
  userUrl,
} from '@cellink/transfer/services';
import { UserService } from './user.service';

@ApiTags(userUrl.tag)
@Controller(userUrl.commonPrefix)
export class UserController {
  constructor(private userService: UserService) {
    this.main();
  }

  async main() {}

  @Post(userUrl.register)
  @ApiBody({ type: RegisterDto })
  async register(@Body() dto: RegisterDto) {
    return this.userService.register(dto);
  }

  @Post(userUrl.login)
  @ApiBody({ type: LoginDto })
  async login(@Body() dto: RegisterDto) {
    return this.userService.login(dto);
  }

  @Post(userUrl.forgetPassword)
  @ApiBody({ type: LoginDto })
  async forgetPassword(@Body() dto: ForgetPasswordDto) {
    return this.userService.forgetPassword(dto);
  }

  @Post(userUrl.info)
  @ApiBody({ type: InfoDto })
  async info(@Body() dto: InfoDto) {
    return this.userService.info(dto);
  }

  @Post(userUrl.infoEdit)
  @ApiBody({ type: InfoEditDto })
  async infoEdit(@Body() dto: InfoEditDto) {
    return this.userService.infoEdit(dto);
  }

  // 用户注册
  // @ApiBody({ type: UserRegisterDto })
  // @Post('register')
  // async register(@Body() userRegisterDto: UserRegisterDto) {
  //   const user = await this.userService.register(userRegisterDto);
  //   await this.organizationService.create(
  //     {
  //       owner_id: user.id,
  //     },
  //     user,
  //   );
  //   return null;
  // }

  // @Post('login')
  // @ApiOkResponse({
  //   description: '用户登录',
  //   type: LoginVo,
  // })
  // async login(@Body() userLoginDto: UserLoginDto) {
  //   return this.userService.login(userLoginDto);
  // }

  // // TODO 要迁移
  // // 用户所在的组织列表
  // @Post('organizations')
  // async organizations(@Body() userOrganizationsDto: UserOrganizationsDto) {
  //   return await this.userService.organizations(userOrganizationsDto.user_id);
  // }

  // @UseGuards(AuthGuard)
  // @Post('info')
  // @ApiBearerAuth('JWT')
  // @ApiOkResponse({ description: '用户信息' })
  // async info(@Body() userInfoDto: UserInfoDto) {
  //   return await this.userService.info(userInfoDto.user_id);
  // }

  // // 用户信息编辑
  // @Post('info/edit')
  // async infoEdit(@Body() userInfoEditDto: UserInfoEditDto) {
  //   return await this.userService.editInfo(userInfoEditDto);
  // }

  // // 组织的用户列表
  // @Post('listOfOrganization/:organization_id')
  // async listOfOrganization(@Param('organization_id') organization_id: number) {
  //   return this.userService.listOfOrganization(organization_id);
  // }

  // // 组织的用户列表
  // @Post('outListOfOrganization/:organization_id')
  // async outListOfOrganization(@Param('organization_id') organization_id: number) {
  //   return this.userService.outListOfOrganization(organization_id);
  // }

  // // 团队的用户列表
  // @Post('listOfTeam/:team_id')
  // async listOfTeam(@Param('team_id') team_id: number) {
  //   return this.userService.listOfTeam(team_id);
  // }
}
