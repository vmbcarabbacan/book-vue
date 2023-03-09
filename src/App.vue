<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang='ts'>
import { defineComponent, onMounted, watchEffect } from 'vue';
// import { socket } from '@/store';

export default defineComponent({
  name: 'App',

  setup() {
    watchEffect(() => {
      // if (socket) {
      //   socket.on('receive-data', (data: any) => {
      //     console.log({ socket_message: data });
      //   });
      // }
    });
  },
});
</script>
