<template>
    <v-card>
        <v-card-title>
            <p> {{ title }} </p>
        </v-card-title>
        <v-card-text>
            <v-data-table
                :headers="headers"
                :items="items"
                @click:row="rowClick"
            >
            <template #item.active="{ item }">
                <v-checkbox
                    v-model="item.active"
                    hide-details
                    disabled
                ></v-checkbox>
            </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { UserHeader, UserValue } from '@/utils/typeDefs'

    defineProps({
        title: String,
        headers: [] as PropType<Array<UserHeader>>,
        items: [] as PropType<Array<UserValue>>
    })

    const emit = defineEmits(['rowClick'])

    const rowClick = (e: UserValue) => {
        emit('rowClick', e)
    }

</script>