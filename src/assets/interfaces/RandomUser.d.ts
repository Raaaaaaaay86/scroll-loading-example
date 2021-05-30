interface UserDayOfBirth {
  age: number;
  data: string;
}

interface UserIdInfo {
  name: string;
  value: null;
}

interface CoordinateInfo {
  latitude: string;
  longtitude: string;
}

interface StreetInfo {
  number: number;
  name: string;
}

interface TimeZoneInfo {
  offset: string;
  description: string;
}

interface UserLocation {
  city: string;
  coordinates: CoordinateInfo;
  country: string;
  postcode: number;
  street: StreetInfo;
  timezone: TimeZoneInfo;
}

interface UserLoginInfo {
  md5: string;
  uuid: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
}

interface UserNameInfo {
  title: string;
  last: string;
  first: string;
}

interface UserPictureInfo {
  large: string;
  medium: string;
  thumbnail: string;
}

interface UserRegisterInfo {
  age: number;
  date: string;
}

interface RandomUserInfo {
  cell: string;
  dob: UserDayOfBirth;
  email: string;
  id: UserIdInfo;
  location: UserLocation;
  login: UserLoginInfo;
  name: UserNameInfo;
  nat: string;
  phone: string;
  picture: UserPictureInfo;
  registered: UserRegisterInfo;
}
