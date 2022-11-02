export interface IProduct {
    id: number,
    title: string,
    price: number,
    totalPrice: number,
    description?: string | null,
    category?: string | null,
    image: string,
    quantity:number
    rating: {
        rate: number,
        count: number
    }
}
