<script lang='ts'>
/* eslint-disable */
import { defineComponent, ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/useUser';
import { userHeader } from '@/utils/tables';
import { UserValue } from '@/utils/typeDefs';
import router from '@/router';

export default defineComponent({
  setup() {
    const header = ref(userHeader);
    const store = useUserStore();
    const { admins } = storeToRefs(store);
    const { getAdmins } = useUserStore();

    onMounted(async () => {
      await getAdmins();
    });

    const handleClick = (e: UserValue) => {
      router.push({ name: 'editPage', params: { view: 'admins', id:e._id } })
    };

    return {
      admins,
      header,
      handleClick,
      getAdmins,
    };
  },
});
</script>

<template>
  <table-user title="Admin Details" :items="admins" :headers="header" @rowClick="handleClick" />
</template>
