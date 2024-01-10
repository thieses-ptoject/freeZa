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
  