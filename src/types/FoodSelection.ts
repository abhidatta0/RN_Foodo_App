export type FoodSelection =  {
    name:string
    image: string,
    subName?: string,
    id:number,
    ratingOutOf5: number;
    calories: number;
    description: string;
} & (PizzaTypes | Variations);

type PizzaTypes = {
    pizzaTypes: PizzaType[],
    toppings?: Topping[];
}

type Variations = {
    variations: VariationType[]
}
type PizzaType = { 
    type:Size,
    price: number,
    diameterInInches:number,
    portion: number;
}

export enum Size {
    small = "Small",
    medium = "Medium",
    large = "Large",
}

type VariationType =  {
    name:string,
    price: number,   
}

export type Topping = {
    name:string,
}