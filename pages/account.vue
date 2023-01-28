<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="6">
      <user-card :user-data="response" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { store } = useContext()

    const response = useAsync(
      async () =>
        await store.dispatch('user/USER', { id: store.$auth?.user?._id })
    )

    return {
      response,
    }
  },
})
</script>
