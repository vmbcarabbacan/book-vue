/* eslint-disable */
import type { Socket } from "socket.io-client";
import { io } from 'socket.io-client';

class SocketIOService {
    socket!: Socket;
    constructor() {
      this.socket = io("http://localhost:3500", {
        autoConnect: false
      });
    }
  }

  export const socket = new SocketIOService().socket;
