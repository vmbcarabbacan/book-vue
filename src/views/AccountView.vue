<template>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <card-user
            :user-data="current"
        />
      </v-col>
    </v-row>
  </template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, onMounted, getCurrentInstance } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/useUser';

export default defineComponent({
  setup() {
    const context = getCurrentInstance();
    const user = context?.appContext.config.globalProperties.$user;
    const socket = context?.appContext.config.globalProperties.$soketio;
    const store = useUserStore();
    let { current } = storeToRefs(store);
    const { account } = useUserStore();

    onMounted(async() => {
      await account({ id: user.id() });
      socket.on('receive-data', (data: any) => {
        console.log({ data })
      })
    });

    return {
      user,
      account,
      current,
    };
  },
});
</script>
