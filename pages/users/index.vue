<template>
    <div>
        <user-table
            :title="title"
            :items="users"
            :headers="header"
            @rowClick="handleClick"
        ></user-table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head: {}
})
</script>

<script lang="ts" setup>
import { ref, useAsync, useContext, useMeta } from "@nuxtjs/composition-api";
import { userHeader } from "@/utils/tables";
import { UserValue } from "@/utils/typeDefs"

    const { store } = useContext()
    useMeta(() => ({
        titleTemplate: 'Users Page'
    }))

    const title = ref('User Details')

    const header = ref(userHeader)

    const users = useAsync(async() => await store.dispatch('user/USERS'))

    const handleClick = (e: UserValue) => {
        console.log(e)
    }
</script>


<style scoped>
    .v-btn{
        text-transform: unset !important;
    }
</style>