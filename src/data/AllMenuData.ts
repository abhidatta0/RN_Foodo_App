import { FoodSelection, Size, Topping } from "../types/FoodSelection";

const availableToppings:Topping[] = [
    {
      name:'Beef',
    },
    {
      name:'Onion',
    },
    {
      name:'Mushroom',
    }
  ]

  
type MenuType = Record<string,{ items: FoodSelection[], iconName:string}>
const data:MenuType = {
    pizza:{
        iconName:'pizza',
        items: [
        {
            name:'Margherita Pizza',
            subName:"with Tomato",
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            pizzaTypes:[
                {
                    type:Size.small,
                    price: 8.50,
                    diameterInInches:10,
                    portion: 4
                },
                {
                    type:Size.medium,
                    price: 10.50,
                    diameterInInches:12,
                    portion: 6
                },
                {
                    type:Size.large,
                    price: 12,
                    diameterInInches:15,
                    portion: 8
                }
            ],
            toppings: [
                availableToppings[0],
                availableToppings[1],
            ],
            id:123,
        },
        {
            name:'Mushroom Pizza',
            image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            pizzaTypes:[
                {
                    type:Size.small,
                    price: 8.50,
                    diameterInInches:10,
                    portion: 4
                },
                {
                    type:Size.medium,
                    price: 10.50,
                    diameterInInches:12,
                    portion: 6
                },
            ],
            toppings: [
                availableToppings[0],
                availableToppings[1],
            ],
            id:124,
        },
        {
            name:'Mushroom(Salami) Pizza',
            subName:"with Tomato",
            image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            pizzaTypes:[
                {
                    type:Size.small,
                    price: 8.50,
                    diameterInInches:10,
                    portion: 4
                },
                {
                    type:Size.medium,
                    price: 10.50,
                    diameterInInches:12,
                    portion: 6
                },
                {
                    type:Size.large,
                    price: 12,
                    diameterInInches:15,
                    portion: 8
                }
            ],
            id:125,
        },
        {
            name:'Margherita Pizza',
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            pizzaTypes:[
                {
                    type:Size.small,
                    price: 8.50,
                    diameterInInches:10,
                    portion: 4
                },
                {
                    type:Size.medium,
                    price: 10.50,
                    diameterInInches:12,
                    portion: 6
                },
            ],
            id:126,
        },
        {
            name:'Mushroom Pizza',
            image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            pizzaTypes:[
                {
                    type:Size.small,
                    price: 8.50,
                    diameterInInches:10,
                    portion: 4
                },
            ],
            id:127,
        },

    ],
    },
    burger:{
        iconName:'hamburger',
        items: [
        {
            name:'Jumbo Royal Chicken Burger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2799&q=80',
            variations:[
                {
                    name:'4pc Hot and Spicy Wings',
                    price: 4,
                    
                },
                {
                    name:'4pc Chicken Wings',
                    price: 6,
                },
                {
                    name:'3pc Peri Peri Wings',
                    price: 6,
                }
            ],
            id:128,
        },
        {
            name:'Aloo Tikki Burger',
            image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80',
            variations:[
                {
                    name:'Aloo Tikki Burger',
                    price: 4,
                    
                },
            ],
            id:129,
        },
    ]
    }
}

export default data;


