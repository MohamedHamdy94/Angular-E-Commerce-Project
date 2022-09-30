export interface Product {
    id: number,
    title: string,
    price: number,
    description?: string | null,
    category?: string | null,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}
