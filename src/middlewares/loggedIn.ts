import { useUserStore } from '@/store/useUser';

const token = window.localStorage.getItem('token');

const isLoggedIn = () => {
  if (token) {
    const { currentUser } = useUserStore();
    currentUser();
  }
};

export default isLoggedIn;
