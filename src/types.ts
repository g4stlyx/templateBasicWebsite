export interface ErrorProps{
    message: string;
    status: number;
}

export interface Product{
    id:number,
    name:string,
    link:string,
    imgSrc:string
}
 
export interface Category{
    id: number,
    name:string,
    link: string,
    imgSrc: string,
    products: Product[]
}