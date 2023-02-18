<template>
    <v-navigation-drawer v-model="drawer">
        <v-sheet
          color="grey-lighten-4"
          class="pa-4"
        >
          <v-avatar
            class="mb-4"
            color="grey-darken-1"
            size="64"
          ></v-avatar>
  
          <div>john@google.com</div>
        </v-sheet>
  
        <v-divider></v-divider>
  
        <v-list>
          <v-list-item
            v-for="[icon, text] in links"
            :key="icon"
            link
          >
            <template v-slot:prepend>
              <v-icon>{{ icon }}</v-icon>
            </template>
  
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
    setup() {
        const drawer = ref(false);

        return {
            drawer
        }
    }
})

</script>