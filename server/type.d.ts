export type posts= {
    image: string,
    body: string,
    userId: string
  }

  export type comments={
    body: string ,
    postId: number,
    userId: string
  }


  export type like ={
    likerId: String,
    postId:  number,
    likes: number
  }
  export type category={
    id:number,
    name:string,
    image:string
  }
  export type GiversFollowed ={
    id  :number    ,
    followerId: string,
    followedId: string
  }

  export type Favourite = {
    id  :  number 
    userId: string
    itemId: number
    
  }