<template>
  <user-card
    v-if="response"
    :user-data="response"
    :is-show="show"
    :return-url="url"
  />
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useAsync,
  toRef,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    uid: {
      type: String,
      required: true,
      default: '',
    },
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
    url: {
      type: String,
      required: false,
      default: '',
    },
  },

  setup(props) {
    const { store } = useContext()
    const UID = toRef(props, 'uid')

    const response = useAsync(
      async () => await store.dispatch('user/USER', { id: UID.value })
    )

    return {
      response,
    }
  },
})
</script>
