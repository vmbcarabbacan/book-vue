const userInfo = [
  {
    title: 'User ID',
    label: 'id',
    value: '_id',
    isEditable: false,
    exclude: [],
  },
  {
    title: 'First Name',
    label: 'firstName',
    value: 'userInfo',
    value2: 'firstName',
    isEditable: true,
    isClick: false,
    showEdit: false,
    type: 'text',
    exclude: [],
  },
  {
    title: 'Family Name',
    label: 'familyName',
    value: 'userInfo',
    value2: 'familyName',
    isEditable: true,
    isClick: false,
    showEdit: false,
    type: 'text',
    exclude: [],
  },
  {
    title: 'Username',
    label: 'username',
    value: 'username',
    isEditable: false,
    type: 'text',
    exclude: [],
  },
  {
    title: 'Email Address',
    label: 'email',
    value: 'email',
    isEditable: false,
    type: 'text',
    exclude: [],
  },
  {
    title: 'Phone Number',
    label: 'contactNumber',
    value: 'userInfo',
    value2: 'contactNumber',
    isEditable: true,
    isClick: false,
    showEdit: false,
    type: 'number',
    exclude: [],
  },
  {
    title: 'Role',
    label: 'role',
    value: 'role',
    isEditable: true,
    isClick: false,
    showEdit: false,
    type: 'text',
    exclude: ['User', 'Driver'],
  },
]

export { userInfo }
