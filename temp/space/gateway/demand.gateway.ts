import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { HeartbeatDto } from '../dto&vo/demand.gateway.dto';
import { ClientSocketHookService } from 'src/share/services/common/clientSocket.hook.service';

@WebSocketGateway({
  namespace: 'demand',
  cors: { origin: '*' },
})
export class DemandGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private clientSocketHookService: ClientSocketHookService) {}

  handleConnection(@ConnectedSocket() client: Socket) {}

  handleDisconnect(@ConnectedSocket() client: Socket) {}

  @SubscribeMessage('heartBeat')
  heartBeat(@MessageBody() dto: HeartbeatDto, @ConnectedSocket() client: Socket): void {
    this.clientSocketHookService.getClientSocket(dto.userId)
      ? this.clientSocketHookService.updateClientSocketLastActiveTime(dto.userId)
      : client.emit('heartbeatError');
  }

  // @SubscribeMessage('test')
  // test(
  //   @MessageBody() userId: number,
  //   @ConnectedSocket() client: Socket,
  // ): Observable<WsResponse<number>> {
  //   // this.server.emit('test', userId);
  //   // client.emit('test', userId);
  //   return of({ event: 'test', data: userId });
  // }

  // // 申请加入
  // @SubscribeMessage('apply')
  // apply(@MessageBody() userId: number): Observable<WsResponse<number>> {
  //   return of({ event: 'apply', data: userId });
  // }
}

// this.eventGateway.server.emit('name', data)
