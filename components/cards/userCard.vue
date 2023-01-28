<template>
  <v-card>
    <v-card-text class="text-center">
      <v-avatar size="120">
        <img :src="user?.userInfo?.profile" :alt="user?.name" contain />
      </v-avatar>
    </v-card-text>
    <v-card-text>
      <v-simple-table dense>
        <template #default>
          <tbody>
            <tr
              v-for="(info, i) in infos"
              :key="i"
              class="cursor-pointer"
              @mouseenter="info.showEdit = true"
              @mouseleave="info.showEdit = false"
              @click="info.isClick = !info.isClick"
            >
              <td>{{ info.title }}</td>
              <td v-if="!info.value2">
                <v-text-field
                  v-if="info.isClick && info.isEditable"
                  v-model="user[info?.value]"
                  :type="info.type"
                  append-outer-icon="mdi-send"
                  autofocus
                  @click:append-outer="updateInfo(info)"
                  @keypress.prevent.enter="updateInfo(info)"
                  @click.stop="clickStop"
                />
                <span v-else>{{ user[info?.value] }}</span>
              </td>
              <td v-if="info.value2">
                <v-text-field
                  v-if="info.isClick && info.isEditable"
                  v-model="user[info?.value][info?.value2]"
                  :type="info.type"
                  append-outer-icon="mdi-send"
                  autofocus
                  @click:append-outer="updateInfo(info)"
                  @keypress.prevent.enter="updateInfo(info)"
                  @click.stop="clickStop"
                />
                <span v-else>{{ user[info?.value][info?.value2] }}</span>
              </td>
              <td>
                <v-icon v-if="info.isEditable && info.showEdit"
                  >mdi-pencil-{{
                    info.isClick ? 'off-outline' : 'outline'
                  }}</v-icon
                >
              </td>
            </tr>
            <tr
              @mouseenter="showEdit = true"
              @mouseleave="showEdit = false"
              @click="isClick = !isClick"
            >
              <td>Password</td>
              <td>
                <span v-if="!isClick">*********</span>
                <v-text-field
                  v-if="isClick"
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  append-outer-icon="mdi-send"
                  autofocus
                  @click:append="show = !show"
                  @click:append-outer="updateInfo"
                  @keypress.prevent.enter="updateInfo"
                  @click.stop="clickStop"
                />
              </td>
              <td>
                <v-icon v-if="showEdit"
                  >mdi-pencil-{{ isClick ? 'off-outline' : 'outline' }}</v-icon
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import {
  defineComponent,
  toRef,
  ref,
  PropType,
  useStore,
} from '@nuxtjs/composition-api'
import { UserValue, UserEdit } from '@/utils/typeDefs'
import { userInfo } from '@/utils/users'

export default defineComponent({
  props: {
    userData: {
      type: Object as PropType<UserValue>,
      required: true,
    },
  },
  setup(_) {
    const user = toRef(_, 'userData')
    const store = useStore()

    const infos = ref(userInfo)
    const password = ref(null)
    const showEdit = ref(false)
    const isClick = ref(false)
    const show = ref(false)

    const updateInfo = async (info: UserEdit | null) => {
      const userMap = new Map()
      userInfo.forEach((x) => {
        userMap.set(
          x.label,
          x.value2 ? user.value[x.value][x.value2] : user.value[x.value]
        )
      })
      if (password.value) {
        userMap.set('password', password.value)
        isClick.value = false
        password.value = null
      }

      info?.isClick = false

      const objUser = Object.fromEntries(userMap)
      await store.dispatch('user/USER_UPDATE', objUser)
    }

    const clickStop = () => {
      // some actions
    }

    return {
      updateInfo,
      clickStop,
      showEdit,
      isClick,
      show,
      user,
      infos,
      password,
    }
  },
})
</script>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
