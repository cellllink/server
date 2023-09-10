import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class ManagerService {
  public manager: EntityManager;

  constructor(private configService: ConfigService) {
    const LocalDataSource = new DataSource({
      type: 'mysql',
      ...this.configService.get('db.mysql'),
    });

    LocalDataSource.initialize().then(() => (this.manager = LocalDataSource.manager));
  }
}
