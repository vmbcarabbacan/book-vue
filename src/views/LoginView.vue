<script lang="ts" setup>
/* eslint-disable */
import { useUserStore } from '@/store/useUser';
import { onMounted } from 'vue';
// import { socket } from '@/store';


const { login } = useUserStore();

onMounted(() => {
  // socket.on('receive-data', (data) => {
  //   console.log(data)
  // })
})
</script>

<template>
  <v-app>
    <v-row align-content="center" justify="center">
        <v-col cols="6">
        <form-auth title="Login" has-login @process="login" />
        </v-col>
    </v-row>
  </v-app>
</template>
