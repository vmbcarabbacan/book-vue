<script lang="ts">
import {
  defineComponent,
  PropType,
  toRef,
  ref,
} from 'vue';
import {
  UserValue,
  UserEdit,
} from '@/utils/typeDefs';
import userInfo from '@/utils/users';
import { useUserStore } from '@/store/useUser';

export default defineComponent({
  /* eslint-disable */
  props: {
    userData: {
      type: Object,
      required: true,
      default: {} as PropType<UserValue>,
    },
    isShow: {
      type: Boolean,
      required: false,
      default: false,
    },
    returnUrl: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(_) {
    const user = toRef(_, 'userData');

    const infos = ref(userInfo);
    const file = ref();
    const password = ref(null);
    const showEdit = ref(false);
    const isClick = ref(false);
    const show = ref(false);

    const { updateUser, updateUserProfile } = useUserStore();

    const updateInfo = async (info: UserEdit) => {
      const userMap = new Map();
      userInfo.forEach((x) => {
        userMap.set(x.label, x.value2 ? user.value[x.value][x.value2] : user.value[x.value]);
      });
      if (password.value) {
        userMap.set('password', password.value);
        isClick.value = false;
        password.value = null;
      }

      info.isClick = false;

      const objUser = Object.fromEntries(userMap);
      await updateUser(objUser);
    };

    const clickStop = () => {
      // some actions
    };

    const openFile = () => {
      file.value.click();
    };

    const selectedImage = async (file: any) => {
      const formData = new FormData();
      const data = file.target.files[0];

      formData.append('file', data);
      formData.append('id', user.value._id);

      await updateUserProfile(formData);

    };

    return {
      updateUserProfile,
      openFile,
      selectedImage,
      updateInfo,
      clickStop,
      file,
      showEdit,
      isClick,
      show,
      user,
      infos,
      password,
    };
  },
});
</script>

<template>
  <v-card>
    <v-card-title>
      <router-link v-if="isShow" :to="returnUrl" class="no-decoration">
        <v-icon>mdi-arrow-left</v-icon>
      </router-link>
    </v-card-title>
    <v-card-text class="text-center">
      <v-avatar size="120">
        <img
          :src="user?.userInfo?.profile"
          :alt="user?.name"
          contain
          class="cursor-pointer"
          @click="openFile"
        />
        <input
          ref="file"
          type="file"
          style="visibility: hidden"
          accept="image/png, image/gif, image/jpeg"
          @change="selectedImage"
        />
      </v-avatar>
    </v-card-text>
    <v-card-text>
      <v-table dense>
        <template #default>
          <tbody>
            <template v-for="(info, i) in infos">
              <tr
                v-if="!info.exclude.includes(user?.role)"
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
                    append-icon="mdi-send"
                    autofocus
                    @click.stop:append="updateInfo(info)"
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
                    append-icon="mdi-send"
                    autofocus
                    @click.stop:append="updateInfo(info)"
                    @keypress.prevent.enter="updateInfo(info)"
                    @click.stop="clickStop"
                  />
                  <span v-else>{{ user[info.value] && user[info.value][info.value2] ? user[info.value][info.value2] : user[info.value] }}</span>
                </td>
                <td>
                  <v-icon v-if="info.isEditable && info.showEdit"
                    >mdi-pencil-{{ info.isClick ? "off-outline" : "outline" }}</v-icon
                  >
                </td>
              </tr>
            </template>

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
                  >mdi-pencil-{{ isClick ? "off-outline" : "outline" }}</v-icon
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.no-decoration {
  text-decoration: none;
}
</style>
