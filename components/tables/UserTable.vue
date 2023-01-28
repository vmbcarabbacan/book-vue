<template>
  <v-card>
    <v-card-title>
      <p>{{ title }}</p>
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="items" @click:row="rowClick">
        <template #item.active="{ item }">
          <v-checkbox v-model="item.active" hide-details disabled></v-checkbox>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { UserHeader, UserValue } from '@/utils/typeDefs'

defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
  headers: {
    type: Array as PropType<Array<UserHeader>>,
    required: true,
  },
  items: {
    type: Array as PropType<Array<UserValue>>,
    required: true,
  },
})

const emit = defineEmits(['rowClick'])

const rowClick = (e: UserValue) => {
  emit('rowClick', e)
}
</script>
