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
    const { users } = storeToRefs(store);
    const { getUsersByRole } = useUserStore();

    onMounted(async () => {
      await getUsersByRole({ role: 'User' });
    });

    const handleClick = (e: UserValue) => {
      router.push({ name: 'editPage', params: { view: 'users', id:e._id } })
    };

    return {
      users,
      header,
      handleClick,
    };
  },
});
</script>

<template>
  <table-user
    title="User Details"
    :items="users"
    :headers="header"
    @rowClick="handleClick"
  />
</template>
