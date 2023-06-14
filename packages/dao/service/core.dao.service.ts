import { Injectable } from '@nestjs/common';
import { CoreRepositoryService } from 'packages/database/service';

@Injectable()
export class CoreDaoServcie {
  constructor(public repository: CoreRepositoryService) {
    this.main();
  }

  private async main() {}
}
