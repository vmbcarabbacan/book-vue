<script lang='ts'>
/* eslint-disable */
import { defineComponent, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/useUser';
import router from '@/router';

export default defineComponent({
  setup() {
    const url = `/${router.currentRoute.value.params.view}`;
    const id = router.currentRoute.value.params.id.toString();
    const store = useUserStore();
    const { current } = storeToRefs(store);
    const { account } = useUserStore();

    onMounted(async() => {
      await account({ id })
    })

    return {
      current,
      id,
      url,
    };
  },
});
</script>

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="6">
      <card-user
          :user-data="current"
          is-show
          :return-url="url"
      />
    </v-col>
  </v-row>
</template>
