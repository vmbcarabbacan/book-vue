<template>
  <v-card>
    <v-card-title> {{ title }} </v-card-title>
    <v-card-text>
      <v-text-field
        v-if="!hasLogin"
        v-model="user.firstName"
        placeholder="First Name"
      ></v-text-field>
      <v-text-field
        v-if="!hasLogin"
        v-model="user.familyName"
        placeholder="Family Name"
      ></v-text-field>
      <v-text-field
        v-model="user.username"
        placeholder="User Name"
      ></v-text-field>
      <v-text-field
        v-if="!hasLogin"
        v-model="user.email"
        placeholder="Email address"
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        placeholder="password"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-text-field
        v-if="!hasLogin"
        v-model="user.contactNumber"
        placeholder="Contact Number"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('process', user)">{{
        hasLogin ? 'Signin' : 'Register'
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, useContext, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'custom',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Login',
    },
    hasLogin: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  setup() {
    const { store } = useContext()

    const user = JSON.parse(JSON.stringify(store.getters['user/getAuth']))

    const showPassword = ref<Boolean>(false)

    return {
      user,
      showPassword,
    }
  },
})
</script>
