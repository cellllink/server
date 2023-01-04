import { Injectable } from '@nestjs/common';
import { DaoService } from '@cellink/database/daos';
import { User } from '@cellink/database/entities';
import { BaseException } from 'src/share/httpExceptions';
import { encryptPasswordBySalt, makeSalt } from 'src/share/utils';
// import { AuthService } from '../common/auth/auth.service';
import { UserLoginDto, UserRegisterDto, UserInfoEditDto } from './user.dto';
import { LoginVo } from './user.vo';
import {
  ForgetPasswordDto,
  InfoDto,
  InfoEditDto,
  LoginDto,
  RegisterDto,
  userUrl,
} from '@cellink/transfer/services';

@Injectable()
export class UserService {
  constructor(
    private dao: DaoService, // private authService: AuthService
  ) {
    this.main();
  }

  async main() {}

  async register(dto: RegisterDto) {
    // 注冊用戶
    const { account, password } = dto;
    // 生成默认的组织
  }

  async login(dto: LoginDto) {}

  async forgetPassword(dto: ForgetPasswordDto) {}

  async info(dto: InfoDto) {}

  async infoEdit(dto: InfoEditDto) {}

  // async register(userRegisterDto: UserRegisterDto) {
  //   const { account, password } = userRegisterDto;
  //   const user = await this.dao.user.findOneByAccount(account);

  //   if (user) throw new BaseException('该账号已存在');

  //   const salt = makeSalt(); // 制作密码盐
  //   const hashPassword = encryptPasswordBySalt(password, salt); // 加密密码

  //   let newUser = new User();
  //   newUser.account = account;
  //   newUser.password = hashPassword;
  //   newUser.password_salt = salt;
  //   newUser.name = '新用户';
  //   newUser.register_time = new Date();
  //   newUser.register_time = new Date();

  //   return await this.dao.repository.user.save(newUser);
  // }

  // async login(userLoginDto: UserLoginDto): Promise<any> {
  //   // async login(userLoginDto: UserLoginDto): Promise<LoginVo> {
  //   const { account, password } = userLoginDto;
  //   const user = await this.dao.user.findOneByAccount(account);

  //   if (!user) throw new BaseException('未找到该账户');

  //   const hashPassword = encryptPasswordBySalt(password, user.password_salt); // 加密密码
  //   if (user.password !== hashPassword) throw new BaseException('密码错误');

  //   // return {
  //   //   user,
  //   //   token: this.authService.createAuthToken(user.id),
  //   // };
  // }

  // // async organizations(user_id: number) {
  // //   return this.organizationDao.listOfUser(user_id);
  // // }

  // async info(user_id: number) {
  //   return await this.dao.user.findOneById(user_id);
  // }

  // async editInfo(userInfoEditDto: UserInfoEditDto) {
  //   const user = await this.dao.user.findOneById(userInfoEditDto.id);
  //   await this.dao.repository.user.save({
  //     ...user,
  //     ...userInfoEditDto,
  //   });
  // }

  // async listOfOrganization(organization_id: number) {
  //   // return this.dao.organization.members(organization_id);
  // }

  // async outListOfOrganization(organization_id: number) {
  //   return;
  // }

  // async listOfTeam(team_id: number) {
  //   return;
  // }
}
