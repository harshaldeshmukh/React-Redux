import { ADD_TO_CART, REMOVE_TO_CART } from "./constants"

const initialStage={
    cardData:[]

}
//export default function cardItems(state=initialStage,action){
export default function cardItems(state=[],action){

    switch(action.type){
        case ADD_TO_CART:
            console.warn("Reducer Data " + action.data.name )
            return [
                ...state,
                {cardData:action.data}
                
            ]
            break;
            case REMOVE_TO_CART:
            console.warn("Reducer REMOVE_TO_CART ")
            state.pop();
            return [
                ...state,
              
                
            ]

            default: return  state;
    }
    


}