interface User {
  id: string;
  firstName: string;
  lastName: stringstring;
  email: string;
  image: string;
  strawberries: number;
  rate: number;
  level: string;
  accountType: boolean;
  nbrOfDonation: number;
  nbrOfTakes: number;
  address: string;
  phone: string;
}
interface Category {
  id: number;
  name: string;
  image: string;
  Types: type[];
}

interface GiversFollowed {
  id: string;
  followed: object;
  followerId: string;
  followedId: string;
}
interface type {
  id: number;
  type: string;
  categoryId: number;
}

interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
  strawberries: number;
  type: string;
  location: string;
  state: string;
  exclusive: boolean;
  ownerId: string;
  typeId: number;
}

interface Posts {
  id: number;
  image: String;
  body: String;
  userId: String;
}
interface Products {
  id: number;
  name: string;
  description: string;
  image: string[];
  strawberries: number;
  type: string;
  location: string;
  state: string;
  exclusive: boolean;
  createdAt: Date;
  ownerId: string;
  typeId: number;
}
interface Types {
  id: number;
  type: string;
  categoryId: number;
}

interface WishList {
  id: number;
  userId: string;
  itemId: number;
}

interface Rate {
  id: number;
  nbrOfStars: number;
  comments: string;
  raterId: string;
  ratedId: string;
}

interface Appointments {
  id: number;
  time: string;
  location: string;
  status: boolean;
  giverId: string;
  reciverId: string;
  ItemId: number;
}

interface  comments {
  body: string ,
  postId: number,
  userId: string
}
interface  like {
  likerId: String,
  postId:  number,
  likes: number
}