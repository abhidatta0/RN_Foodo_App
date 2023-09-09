import { FoodSelection, Topping } from "../types/FoodSelection";
import { findLowest } from "../utils/food";

const useFood = (food: FoodSelection)=>{

    const isPizzaType = food.category_type === 'PIZZA' ;
    
    const getLowestPrice = ()=>{
        if(isPizzaType){
        return findLowest(food.pizzaTypes.map(pz => pz.price));
        }
        return findLowest(food.variations.map((v)=> v.price));
    }

    const getDiameterAndPortion = ()=>{
        if(isPizzaType) return( {
         diameter:food.pizzaTypes[0].diameterInInches,
         portion:food.pizzaTypes[0].portion,
        })
        return null;
    }

    const getAvailableSizes = (): string[]|null=>{
      if(isPizzaType) return food.pizzaTypes.map((pz)=> pz.size)
      return null;
  }

  const getToppings = (): Topping[]|null=>{
    if(isPizzaType) return food.toppings ?? null;
    return null;
  }

  const getVariationsNames = (): string[]|null=>{
    if(!isPizzaType) return food.variations.map((v)=> v.name);
    return null;
}
  return {
    isPizzaType,
    getLowestPrice,
    getDiameterAndPortion,
    getAvailableSizes,
    getVariationsNames,
    getToppings,
  }
}

export default useFood;