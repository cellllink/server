import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

// 每 30s 心跳检测一次，更新 lastActiveTime
interface ClientSocket {
  socket: Socket;
  lastActiveTime: number; // 时间戳
}

// 检测最后激活时间是否超时(3分钟以内的算激活的)
function checkClientSocketIsActive(lastActiveTime: number): boolean {
  return lastActiveTime + 180000 > Date.now();
}

@Injectable()
export class ClientSocketHookService {
  connectionUsersCount = 0;
  clientSocketMap: Map<number, ClientSocket> = new Map();

  constructor() {}

  updateConnectionUsersCount(type: 'add' | 'remove'): void {
    this.connectionUsersCount = this.connectionUsersCount + (type === 'add' ? 1 : -1);
  }

  addClientSocket(userId: number, client: Socket): void {
    this.updateConnectionUsersCount('add');
    this.clientSocketMap.set(userId, {
      socket: client,
      lastActiveTime: Date.now(),
    });
  }

  removeClientSocket(userId: number): void {
    this.updateConnectionUsersCount('remove');
    this.clientSocketMap.delete(userId);
  }

  getClientSocket(userId: number): null | ClientSocket {
    const clientSocket = this.clientSocketMap.get(userId);

    if (!clientSocket) return null;

    if (!checkClientSocketIsActive(clientSocket.lastActiveTime)) {
      this.removeClientSocket(userId);
      return null;
    }

    return clientSocket;
  }

  updateClientSocketLastActiveTime(userId: number): void {
    const clientSocket = this.clientSocketMap.get(userId);
    if (!clientSocket) return null;

    clientSocket.lastActiveTime = Date.now();
  }
}
