type User = {
  firstName: string
  familyName: string
  username: string
  email: string
  password: string
  role: string
  contactNumber: string
}

type UserHeader = {
  text: string
  value: string
  value2?: string
  align?: string
  type?: string
  sortable?: boolean
  filterable?: boolean
  groupable?: boolean
  divider?: boolean
  class?: string | Array<string>
  cellClass?: string | Array<string>
  width?: string | number
}

type UserAddress = {
  user: string
  country: string
  state: string
  city: string
  street: string
  buildingName: string
  landmark: string
  coordinates: Array<number>
}

type UserHandle = {
  _id: string
  active: boolean
  createdAt: string
  email: string
  role: string
  status: string
  updatedAt: string
  username: string
}

type UserBook = {
  fromDestination?: Array<number>
  endDestination?: Array<number>
  schedule: string
  exclusive: number
  vat: number
  total: number
  customerRating: number
  status: string
  passenger?: UserHandle
  driver?: UserHandle
}

type UserDocument = {
  user: string
  category: string
  message: string
  expiryDate: string
  imagePath: string
  status: string
}

type UserInfo = {
  user: string
  firstName: string
  familyName: string
  contactNumber: string
  credits: string
  profile: string
}

type UserValue = {
  _id: string
  name: string
  active: boolean
  addresses?: Array<UserAddress>
  books?: Array<UserBook>
  createdAt: string
  documents?: Array<UserDocument>
  email: string
  role: string
  status: string
  trips?: Array<UserBook>
  updatedAt: string
  userInfo: UserInfo
  username: string,
}

type UserEdit = {
  title: string
  label: string
  value: string
  value2?: string
  isEditable: boolean
  isClick: boolean
  type: string
  exclude?: Array<string>
}

type Login = {
  email: string,
  password: string,
}

type Error = {
  data: Message,
  status: number
}

type Message = {
  message: string
}

type Id = {
  id: string
}

type UpdateAccount = {
  contactNumber: string
  email: string
  familyName: string
  firstName: string
  id: string
  role: string
  username: string
  password?: string
}

type UpdateProfile = {
  file: string
  id: string
}

type Role = {
  role: string | 'User' | 'Driver'
}

export {
  User, Login, Id, Role, Error, UserHeader, UserValue, UserEdit, UpdateAccount, UpdateProfile,
};
