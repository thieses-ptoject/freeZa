interface Category{
    id:number,
    name:string,
    image:string
    Types:type[]
  }
interface type{
  id:number
  type:string
  categoryId:string
}