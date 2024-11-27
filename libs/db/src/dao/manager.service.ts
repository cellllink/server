import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource, EntityManager as TypeormEntityManager } from 'typeorm';

@Injectable()
export class EntityManager {
  private manager: TypeormEntityManager;

  // 所有的方法包裹一下 TODO
  test() {
    return this.manager;
  }

  constructor(private configService: ConfigService) {
    const LocalDataSource = new DataSource({
      type: 'mysql',
      ...this.configService.get('db.mysql'),
    });

    LocalDataSource.initialize().then(() => (this.manager = LocalDataSource.manager));
  }
}
