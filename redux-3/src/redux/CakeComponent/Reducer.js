import { BUY_CAKE } from "./CakeType"

const initialState = {
    numOfCake : 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE : 
            return {
                ...state,
                numOfCake : state.numOfCake - 1
            }
        
            default : return state
    }
}

export default reducer

