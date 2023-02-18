<script lang="ts">
/* eslint-disable */
import { defineComponent, toRef } from 'vue';
import {  UserValue } from '@/utils/typeDefs';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    headers: {
      type: Object,
      required: true,
      default: {}
    },
    items: {
      type: Object,
      required: true,
      default: {}
    },
  },

  setup(_, { emit }) {
    const tItems = toRef(_, 'items');
    const tHeaders = toRef(_, 'headers');

    const rowClick = (e: UserValue) => {
      emit('rowClick', e);
    };

    const stp = () => {
      // click
    }

    return {
      tHeaders,
      tItems,
      rowClick,
      stp,
    }
  }
});

</script>

<template>
  <v-card>
    <v-card-title>
      <p>{{ title }}</p>
    </v-card-title>
    <v-card-text>
      <v-table dense>
        <thead>
          <tr>
            <th v-for="(header, index) in tHeaders" :key="index"> {{ header?.text }} </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in tItems" :key="i" @click="rowClick(item)">
            <td v-for="(header, j) in headers" :key="j"> 
                <span v-if="header.type === 'text'" @click.stop="stp">  {{ header.value2 ? item[header.value][header.value2]  : item[header.value] }}</span>
                <v-checkbox v-if="header.type === 'checkbox'" v-model="item[header.value]" hide-details disabled></v-checkbox>
              </td>
            </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>
