<template>
  <user-table
    :title="title"
    :items="users"
    :headers="header"
    @rowClick="handleClick"
  ></user-table>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useMeta,
  computed,
} from '@nuxtjs/composition-api'
import { userHeader } from '@/utils/tables'
import { UserValue } from '@/utils/typeDefs'

export default defineComponent({
  setup() {
    const title = ref('Driver Details')

    const { store } = useContext()
    useMeta(() => ({
      titleTemplate: 'Drivers Page',
    }))

    const header = ref(userHeader)

    const users = computed(() => {
      return store.state.user.uUser
    })

    const handleClick = (e: UserValue) => {
      window.location.href = `/drivers/edit/${e._id}`
    }

    return {
      handleClick,
      title,
      users,
      header,
    }
  },

  async fetch() {
    await this.$store.dispatch('user/USER_BY_ROLE', { role: 'Driver' })
  },

  head: {},
})
</script>

<style scoped>
.v-btn {
  text-transform: unset !important;
}
</style>
