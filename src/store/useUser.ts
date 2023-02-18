/* eslint-disable */
import { defineStore } from 'pinia';
import { User, Login, Id, Role, UserValue, Error, UpdateAccount, UpdateProfile } from '@/utils/typeDefs';
import links from '@/utils/links';
import storage from '@/utils/storage'
import ApiService from '@/services/ApiService';
import router from '@/router';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    auth: <User> {},
    user: <UserValue> {},
    loading: <boolean> false,
    error: <string> '',
    statusCode: <number> 200,
    token: <string> '',
    current: <UserValue> {},
    admins: <Array<UserValue>> [],
    users: <Array<UserValue>> [],
  }),

  actions: {
    async login(payload: Login) {
      this.reset();
      this.loading = true;
      try {
        const response = await ApiService.auth(links.LOGIN, payload);
        this.token = response.data.token;
        this.statusCode = response.status;
        window.localStorage.setItem(storage.token, this.token);
        if(this.statusCode === 200) await this.currentUser();
        await router.push({ name: 'home' });
        this.reset();
      } catch (err: any) {
        this.setError(err.response, false);
      }
    },

    async currentUser() {
        const response = await ApiService.get(links.CURRENT_USER);
        this.user = response.data.user;
    },

    async refreshToekn() {
        const response = await ApiService.get(links.TOKEN_REFRESH);
        this.token = response.data.token;
        this.statusCode = response.status;
        window.localStorage.setItem(storage.token, this.token);
        if(this.statusCode === 200) await this.currentUser();
    },

    async account({ id } : Id) {
      this.reset();
      this.loading = true;
      try {
        const response = await ApiService.get(`${links.USERS}/${id}`);
        this.current = response.data.user;
        this.reset();
      } catch (err: any) {
        this.setError(err.response, false);
      }
    },

    async logout() {
        await ApiService.delete(links.LOGOUT);
        await this.remove();
        await this.reset();
        await router.push({ name: 'login' });
    },

    async updateUser(payload: UpdateAccount) {
      this.reset();
      this.loading = true;
      try {
        const response = await ApiService.put(`${links.USER_UPDATE}/${payload.id}`, payload);
        // this.current = await response.data.user;
        this.reset();
      } catch (err: any) {
        this.setError(err.response, false);
      }
    },

    async updateUserProfile(payload: UpdateProfile | any) {
      this.reset();
      this.loading = true;
      try {
        const { data } = await ApiService.put(links.USER_UPDATE_PROFILE, payload);
        await this.account({ id: data.user._id });
      } catch (err: any) {
        this.setError(err.response, false);
      }
    },

    async getAdmins() {
      this.reset();
      this.loading = true;
      try {
        const response = await ApiService.get(links.USERS);
        this.admins = response.data;
      } catch (err: any) {
        this.setError(err.response, false);
      }
    },

    async getUsersByRole(payload: Role) {
      this.reset();
      this.loading = true;
      try {
        const response = await ApiService.post(links.USER_BY_ROLE, payload);
        this.users = response.data.users;
      } catch (err: any) {
        this.setError(err.response, false);
      }
    },

    async setError(err: Error, payload: boolean) {
      this.error = err.data.message;
      this.statusCode = err.status;
      this.loading = payload;
    },

    async reset() {
        this.error = '';
        this.statusCode = 200;
        this.loading  = false;
    },

    async remove() {
        this.user = <UserValue> {};
        this.token = '';
        window.localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    }
  },
});
