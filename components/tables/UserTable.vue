<template>
    <v-card>
        <v-card-title>
            <p v-html="title" />
        </v-card-title>
        <v-card-text>
            <v-data-table
                :headers="headers"
                :items="items"
                @click:row="rowClick"
            >
            <template v-slot:item.active="{ item }">
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
import { UserHeader, UserValue } from '@/utils/typeDefs'
import type { PropType } from 'vue'

    const props = defineProps({
        title: String,
        headers: [] as PropType<Array<UserHeader>>,
        items: [] as PropType<Array<UserValue>>
    })

    const emit = defineEmits(['rowClick'])

    const rowClick = (e: UserValue) => {
        emit('rowClick', e)
    }

</script>