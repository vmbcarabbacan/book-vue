<template>
  <div>
    <auth-forms title="Login" has-login @process="signin" />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { User } from '@/utils/typeDefs'

export default defineComponent({
  layout: 'custom',

  setup() {
    const { $auth } = useContext()

    const signin = async ({ username, password }: User) => {
      await $auth.loginWith('local', {
        data: { username, password },
      })
      // console.log(login)
      // const data = await store.dispatch('user/login', user);
      // console.log(data)
    }

    return {
      signin,
    }
  },
})
</script>
