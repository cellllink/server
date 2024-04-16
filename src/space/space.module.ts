import { Module } from '@nestjs/common';
import { DemandGateway } from './gateway/demand.gateway';

const Gateways = [DemandGateway];

@Module({
  controllers: [],
  providers: [...Gateways],
})
export class SpaceModule {}
