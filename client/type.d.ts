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
  categoryId:string
}
