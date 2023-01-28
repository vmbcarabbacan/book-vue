<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="6">
      <user-card :user-data="response" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useAsync,
  useRoute,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'UserEdit',

  setup() {
    const { store } = useContext()
    const route = useRoute()

    const response = useAsync(
      async () =>
        await store.dispatch('user/USER', { id: route.value.params.id })
    )

    return {
      response,
    }
  },
})
</script>
