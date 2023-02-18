/* eslint-disable */
import { reactive } from 'vue';
import { useUserStore } from '@/store/useUser';

export const pStore = reactive({
  refresh() {
    const { refreshToekn } = useUserStore();
    refreshToekn();
  },
});
