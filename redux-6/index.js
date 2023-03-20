const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware


const ORDER_PIZZA = 'ORDER_PIZZA'
const PIZZAS_RESTOCKED = 'PIZZAS_RESTOCKED'
const ORDER_ICECREAM = 'ORDER_ICECREAM'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

// action
function orderPizza() {
    return {
        type : ORDER_PIZZA,
        payload : 1
    }
}
function restockPizza(qty = 1) {
    return {
        type : PIZZAS_RESTOCKED,
        payload : qty
    }
}

function orderIceCream() {
    return {
        type : ORDER_ICECREAM,
        payload : 1
    }
}
function restockIcrCream (qty2 = 1) {
    return {
        type : ICECREAM_RESTOCKED,
        payload : qty2
    }
}


// reducer
const initialStatePizza = {
    numOfPizzas : 10
}
const initialStateIceCream = {
    numOfIceCream : 20

}

const reducerPizza = (state = initialStatePizza, action) => {
    switch (action.type) {
        case ORDER_PIZZA :
             return {
                ...state,
                numOfPizzas : state.numOfPizzas - 1
            }
        case PIZZAS_RESTOCKED :
             return {
                ...state,
                numOfPizzas : state.numOfPizzas + action.payload
            }


        default :
            return state
    }
}
const reducerIceCream = (state = initialStateIceCream, action) => {
    switch (action.type) {
        case ORDER_ICECREAM :
             return {
                ...state,
                numOfIceCream : state.numOfIceCream - 1
            }
        case ICECREAM_RESTOCKED :
             return {
                ...state,
                numOfIceCream : state.numOfIceCream + action.payload
            }

        default :
            return state
    }
}

const rootReducer = combineReducers({
    pizza : reducerPizza,
    iceCream : reducerIceCream
})


// store
const store = createStore(rootReducer, redux.applyMiddleware(logger))
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {})

store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(restockPizza(4))
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(restockIcrCream(4))




unsubscribe()



