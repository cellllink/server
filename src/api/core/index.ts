import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

export const CoreControllers = [
  AuthController,
  OrganizationController,
  TeamController,
  UserController,
];

export const CoreServices = [AuthService, OrganizationService, TeamService, UserService];
