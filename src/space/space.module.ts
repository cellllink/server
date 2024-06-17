import { Module } from '@nestjs/common';

import { DemandController } from './demand.controller';
import { DemandEmitHookService } from './service/demand.emit.hook.service';
import { ClientSocketHookService } from 'src/share/services/common/clientSocket.hook.service';
import { DemandGateway } from './gateway/demand.gateway';

const controllers = [DemandController];
const services = [ClientSocketHookService, DemandEmitHookService];
const gateways = [DemandGateway];

@Module({
  controllers,
  providers: [...services, ...gateways],
})
export class SpaceModule {}
