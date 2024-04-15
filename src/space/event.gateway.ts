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
import { Observable, of } from 'rxjs';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  namespace: 'demand',
  cors: { origin: '*' },
})
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(@ConnectedSocket() client: Socket) {
    client.on('care', () => {
      console.log('care');
    });
    // console.log('Connection');
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    // console.log('DisConnection');
  }

  @SubscribeMessage('test')
  test(
    @MessageBody() userId: number,
    @ConnectedSocket() client: Socket,
  ): Observable<WsResponse<number>> {
    // this.server.emit('test', userId);
    // client.emit('test', userId);
    return of({ event: 'test', data: userId });
  }

  // 申请加入
  @SubscribeMessage('apply')
  apply(@MessageBody() userId: number): Observable<WsResponse<number>> {
    return of({ event: 'apply', data: userId });
  }
}

// this.eventGateway.server.emit('name', data)
