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
    const title = ref('User Details')

    const { store } = useContext()
    useMeta(() => ({
      titleTemplate: 'Users Page',
    }))

    const header = ref(userHeader)

    const users = computed(() => {
      return store.state.user.users
    })

    const handleClick = (e: UserValue) => {
      window.location.href = `/users/edit/${e._id}`
    }

    return {
      handleClick,
      title,
      users,
      header,
    }
  },

  async fetch() {
    await this.$store.dispatch('user/USERS')
  },

  head: {},
})
</script>

<style scoped>
.v-btn {
  text-transform: unset !important;
}
</style>
