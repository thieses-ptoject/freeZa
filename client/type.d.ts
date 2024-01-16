interface User {
    
  id:            string , 
  firstName:     string, 
  lastName:     stringstring,
  email:         string,  
  image:         string , 
  strawberries:  number ,    
  rate:          number ,    
  level:         string , 
  accountType:   boolean, 
  nbrOfDonation: number,     
  nbrOfTakes:    number,     
  address :      string,
  phone :        string
}
interface Category{
    id:number,
    name:string,
    image:string
    Types:type[]
  }

interface GiversFollowed{
  id:string,
  followed: object
  followerId: string
  followedId: string
}
interface type{
  id:number
  type:string
  categoryId:number
}

interface Item{
  id : string
  name : string
  description : string
  image : string
  strawberries : number
  type : string
  location :  string
  state :string
  exclusive :boolean
  ownerId :string
  typeId  : number

}


interface Posts {
  id : number,
  image: String
  body : String
  userId: String
}
interface Products {
  id : number,
  name: string,
  description : string,
  image: string[],
  strawberries: number,
  type: string,
  location: string,
  state : string,
  exclusive: boolean,
  createdAt: Date,
  ownerId: string,
  typeId: number,
}
<<<<<<< HEAD
interface Types {
  id : number,
  type: string,
  categoryId : number
=======
interface WishList {
  id: number,
  userId: string,
  itemId: number
>>>>>>> a9c75c02a3939b15dd7f5d885acbe670322e9e97
}
