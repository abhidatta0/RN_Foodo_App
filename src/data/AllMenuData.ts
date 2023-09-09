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
            ratingOutOf5: 4.7,
            calories: 275,
            category_type:'PIZZA',
            description:'Margherita pizza is known for its ingredients representing the colours of the Italian flag. These ingredients include red tomato sauce, white mozzarella and fresh green basil. When all of these delicious flavours are combined on a hand-kneaded pizza base, a universally-adored pizza is created.',
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            pizzaTypes:[
                {
                    size:Size.small,
                    price: 8.50,
                    diameterInInches:10,
                    portion: 4
                },
                {
                    size:Size.medium,
                    price: 10.50,
                    diameterInInches:12,
                    portion: 6
                },
                {
                    size:Size.large,
                    price: 12,
                    diameterInInches:15,
                    portion: 8
                }
            ],
            toppings: [
                availableToppings[0],
                availableToppings[1],
                availableToppings[2],
            ],
            id:123,
        },
        {
            name:'Mushroom Pizza',
            ratingOutOf5: 3,
            calories: 275,
            category_type:'PIZZA',
            description:'This delicious mushroom pizza is smothered in sautéed mushrooms, onions and garlic, slivers of lacinato kale and layers of mozzarella and fresh-grated parmesan. The dough has same day as well as overnight options. You will love it!',
            image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            pizzaTypes:[
                {
                    size:Size.small,
                    price: 8.50,
                    diameterInInches:10,
                    portion: 4
                },
                {
                    size:Size.medium,
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
            ratingOutOf5: 4.3,
            calories: 290,
            category_type:'PIZZA',
            description:'This delicious mushroom pizza is smothered in sautéed mushrooms, onions and garlic, slivers of lacinato kale and layers of mozzarella and fresh-grated parmesan. The dough has same day as well as overnight options. You will love it!',
            image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            pizzaTypes:[
                {
                    size:Size.small,
                    price: 8.50,
                    diameterInInches:10,
                    portion: 4
                },
                {
                    size:Size.medium,
                    price: 10.50,
                    diameterInInches:12,
                    portion: 6
                },
                {
                    size:Size.large,
                    price: 12,
                    diameterInInches:15,
                    portion: 8
                }
            ],
            id:125,
        },
        {
            name:'Margherita Pizza',
            ratingOutOf5: 3.5,
            calories: 275,
            category_type:'PIZZA',
            description:'Margherita pizza is known for its ingredients representing the colours of the Italian flag. These ingredients include red tomato sauce, white mozzarella and fresh green basil. When all of these delicious flavours are combined on a hand-kneaded pizza base, a universally-adored pizza is created.',
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            pizzaTypes:[
                {
                    size:Size.small,
                    price: 8.50,
                    diameterInInches:10,
                    portion: 4
                },
                {
                    size:Size.medium,
                    price: 10.50,
                    diameterInInches:12,
                    portion: 6
                },
            ],
            id:126,
        },
        {
            name:'Mushroom Pizza',
            ratingOutOf5: 4,
            calories: 230,
            category_type:'PIZZA',
            description:'This delicious mushroom pizza is smothered in sautéed mushrooms, onions and garlic, slivers of lacinato kale and layers of mozzarella and fresh-grated parmesan. The dough has same day as well as overnight options. You will love it!',
            image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            pizzaTypes:[
                {
                    size:Size.small,
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
            ratingOutOf5: 3.7,
            calories: 300,
            category_type:'BURGER',
            description:'Specially crafted combination of the juiciest chicken and choicest spices to create the perfect crunchy chicken burger patty.',
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
            ratingOutOf5: 3.2,
            calories: 250,
            category_type:'BURGER',
            description:'Going plant-based for your chicken cravings is a huge change. To let you enjoy your favorite chicken-like meal on any day of the week - even on the vegetarian days, We bring to you plant-powered range of chicken recipes. Discover the nutritional goodness and fabulous chicken-like taste of our plant-based products that have unbeatable texture, flavour, crunch and juiciness just like the real chicken. It’s all real, and it comes from plants.',
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


