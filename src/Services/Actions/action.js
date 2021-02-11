import { ADD_TO_CART,REMOVE_TO_CART } from "../Reducers/constants"

export const addToCard=(data)=>{
console.warn("Data ::: " + data)
    return {
        type: ADD_TO_CART,
        data:data
    }

}

export const removeToCard=()=>{
    console.warn("removeToCard ::: ")

    return {
        type: REMOVE_TO_CART,
      
    }

}