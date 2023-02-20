import { io } from 'socket.io-client';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/useUser';
import { Socket } from '@/utils/typeDefs';

const store = useUserStore();
const { token } = storeToRefs(store);

class SocketioService {
    socket: any;

    path({ path }: Socket) {
      this.socket = io(process.env.VUE_APP_API_URL, {
        extraHeaders: {
          Authorization: `Bearer ${token.value}`,
        },
        autoConnect: false,
        path,
      });
    }

    byId({ path, id }: Socket) {
      this.socket = io(process.env.VUE_APP_API_URL, {
        extraHeaders: {
          Authorization: `Bearer ${token.value}`,
        },
        autoConnect: false,
        path: `${path}/${id}`,
      });
    }
}

export default new SocketioService();
