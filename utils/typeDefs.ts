type User = {
  firstName: String
  familyName: String
  username: String
  email: String
  password: String
  role: String
  contactNumber: String
}

type UserHeader = {
  text: String
  value: String
  align?: String
  sortable?: Boolean
  filterable?: Boolean
  groupable?: Boolean
  divider?: Boolean
  class?: String | Array<String>
  cellClass?: String | Array<String>
  width?: string | number
}

type UserValue = {
  _id: String
  active: Boolean
  addresses?: Array<UserAddress>
  books?: Array<UserBook>
  createdAt: String
  documents?: Array<UserDocument>
  email: String
  role: String
  status: String
  trips?: Array<UserBook>
  updatedAt: String
  userInfo?: UserInfo
  username: String
}

type UserAddress = {
  user: String
  country: String
  state: String
  city: String
  street: String
  buildingName: String
  landmark: String
  coordinates: Array<Number>
}

type UserBook = {
  fromDestination?: Array<Number>
  endDestination?: Array<Number>
  schedule: String
  exclusive: Number
  vat: Number
  total: Number
  customerRating: Number
  status: String
  passenger?: UserValue
  driver?: UserValue
}

type UserDocument = {
  user: String
  category: String
  message: String
  expiryDate: String
  imagePath: String
  status: String
}

type UserInfo = {
    user: String
    firstName: String
    familyName: String
    contactNumber: String
    credits: String
    profile: String
}

export { User, UserHeader, UserValue }
