const navigator = [
    {
        title: 'Account',
        icon: 'mdi-account',
        to: '/account',
        access: ['Admin', 'User', 'Driver'],
        hasChildren: false
    },
    {
        title: 'Users',
        icon: 'mdi-account-multiple',
        to: '/users',
        access: ['Admin'],
        hasChildren: false
    },
    {
        title: 'For Approval',
        icon: 'mdi-account-multiple-check',
        to: '/for-approval',
        access: ['Admin'],
        hasChildren: false
    },
    
]

export default navigator