export type FoodSelection =  {
    name:string
    image: string,
    id:number,
} & (PizzaTypes | Variations);

type PizzaTypes = {
    pizzaTypes: PizzaType[],
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