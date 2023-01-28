const navigator = [
  {
    title: 'Account',
    icon: 'mdi-account',
    to: '/account',
    access: ['Admin', 'User', 'Driver'],
    hasChildren: false,
  },
  {
    title: 'Admins',
    icon: 'mdi-account-multiple',
    to: '/admins',
    access: ['Admin'],
    hasChildren: false,
  },
  {
    title: 'Users',
    icon: 'mdi-card-account-details',
    to: '/users',
    access: ['Admin'],
    hasChildren: false,
  },
  {
    title: 'Drivers',
    icon: 'mdi-card-account-details-outline',
    to: '/drivers',
    access: ['Admin'],
    hasChildren: false,
  },
  {
    title: 'For Approval',
    icon: 'mdi-account-multiple-check',
    to: '/for-approval',
    access: ['Admin'],
    hasChildren: false,
  },
]

export default navigator
