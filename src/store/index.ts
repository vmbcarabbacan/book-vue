/* eslint-disable */
import { reactive } from 'vue';
import { useUserStore } from '@/store/useUser';
import io from 'socket.io-client';

export const socket = io(process.env.VUE_APP_API_URL);

export const pStore = reactive({
  
  refresh() {
    const { refreshToekn } = useUserStore();
    refreshToekn();
  },
});
