import { useUserStore } from '@/store/useUser';
import axios from 'axios';
import { Service } from 'axios-middleware';

const tokenExpires = () => {
    service.register({
        onRequest(config) {
          console.log({config});
          return config;
        },
        onSync(promise) {
          console.log({promise});
          return promise;
        },
        onResponse(response) {
          console.log({response});
          return response;
        }
      });
}

export { tokenExpires };