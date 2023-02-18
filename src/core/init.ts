import { App } from 'vue';

/**
 * Services
 */
import ApiService from '@/services/ApiService';

/**
 * Core
 */
import Components from '@/core/components';

/**
 * Middlewares
 */
import isLoggedIn from '@/middlewares/loggedIn';
// import { tokenExpires } from '@/middlewares/tokenExpires.d';

/**
 * Functions
 */
import { user } from '@/functions/User';

export default function init(app: App<Element>) {
  ApiService.init(app);
  isLoggedIn();
  // tokenExpires();
  Components(app);
  user(app);
}
