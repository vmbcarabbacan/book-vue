import { App } from 'vue';

/**
 * Cards
 */
import UserCard from '@/components/cards/UserCard.vue';

/**
 * Forms
 */
import AuthForms from '@/components/forms/AuthForms.vue';
import UserForm from '@/components/forms/UserForm.vue';

/**
 * Tables
 */
import UserTable from '@/components/tables/UserTable.vue';

export default function Components(app: App<Element>) {
  const values = [
    { key: 'card-user', component: UserCard },
    { key: 'form-auth', component: AuthForms },
    { key: 'form-user', component: UserForm },
    { key: 'table-user', component: UserTable },
  ];
  values.forEach((element) => {
    app.component(element.key, element.component);
  });
}
