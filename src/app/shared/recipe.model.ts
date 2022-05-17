
export interface Recipe{
    id: number,
    name: string,
    description: string,
    rating: number,
    duration: number,
    imageUrl: string,
    ingredients?: Ingredient[]
}

export interface Ingredient{
    id: number,
    name: string,
    quantity: number
}