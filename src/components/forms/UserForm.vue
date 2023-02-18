<template>
  <card-user
    :user-data="current"
    :is-show="show"
    :return-url="url"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/useUser';

export default defineComponent({
  props: {
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

  async setup() {
    const store = useUserStore();
    const { current } = storeToRefs(store);

    return {
      current,
    };
  },
});
</script>
