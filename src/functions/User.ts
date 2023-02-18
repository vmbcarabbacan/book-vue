/* eslint-disable */
import { App } from 'vue';
import { useUserStore } from '@/store/useUser';
import { storeToRefs } from 'pinia';

export const user = (app: App<Element>) => {
  const store = useUserStore();
  const { user: current } = storeToRefs(store);
  app.config.globalProperties.$user = {
    id() {
      return current.value._id;
    },
  };
};
