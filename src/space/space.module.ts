import { Module } from '@nestjs/common';
import { SocketIoModule } from '@nestjs/platform-socket.io';

@Module({
  imports: [SocketIoModule.forRoot({})],
  controllers: [],
  providers: [],
})
export class SpaceModule {}
