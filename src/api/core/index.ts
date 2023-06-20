import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { OrganizationController } from './organization/organization.controller';
import { OrganizationService } from './organization/organization.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { TeamController } from './team/team.controller';
import { TeamService } from './team/team.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

export const CoreControllers = [
  AuthController,
  OrganizationController,
  ProductController,
  TeamController,
  UserController,
];

export const CoreServices = [
  JwtService,
  JwtStrategy,
  AuthService,
  OrganizationService,
  ProductService,
  TeamService,
  UserService,
];
