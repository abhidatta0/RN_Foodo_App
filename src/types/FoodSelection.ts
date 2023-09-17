export type FoodSelection =  {
    name:string
    image: string,
    subName?: string,
    id:string,
    ratingOutOf5: number;
    calories: number;
    description: string;
} & (PizzaTypes | Burger);

type PizzaTypes = {
    pizzaTypes: PizzaType[],
    toppings?: Topping[];
    category_type :'PIZZA',
}

type Burger = {
    variations: VariationType[],
    category_type:'BURGER'  
}
type PizzaType = { 
    size:Size,
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

export type OrderItem = {
    food: FoodSelection,
    type: PizzaType | VariationType,
    toppingsToAdd?: Topping[],
    quantity: number,
}