<script lang="ts" setup>
/* eslint-disable */
import { useUserStore } from '@/store/useUser';

const { login } = useUserStore();
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
