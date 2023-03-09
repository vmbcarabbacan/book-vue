<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
          <v-list-item
            v-if="user && user.userInfo"
            lines="two"
            :prepend-avatar="user.userInfo.profile"
            :title="user.name"
            :subtitle="user.role"
          ></v-list-item>

        <v-divider></v-divider>

        <template v-for="(item, i) in navs">
          <v-list-item
            v-if="item.access.includes(user.role)"
            :key="i"
            :prepend-icon="item.icon"
            :title="item.title"
            :to="item.to"
          />
        </template>
      </v-list>
      <template #append>
        <v-divider></v-divider>
        <div class="pa-2">
          <v-list-item
            title="Logout"
            prepend-icon="mdi-logout"
            @click="logout"
          />
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, onMounted, ref } from 'vue';
import { useUserStore } from '@/store/useUser';
import { storeToRefs } from 'pinia';
import navs from '@/utils/nav';
// import { socket } from '@/store'


export default defineComponent({
  name: 'default-layout',
  setup() {
    const store = useUserStore();
    const { logout } = useUserStore();
    const { user } = storeToRefs(store);
    const clipped = ref(false);
    const drawer = ref(false);
    const fixed = ref(false);
    const title = ref('Vuetify.js');

    onMounted(() => {
      // socket.on('receive-data', (data:any) => {
      //   console.log({socket_message:data})
      // })
    })

    return {
      user,
      clipped,
      drawer,
      fixed,
      title,
      navs,
      logout,
    };
  },
});
</script>
