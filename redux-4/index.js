

const redux = require('redux')
const createStore = redux.createStore

const ORDER_PIZZA = 'ORDER_PIZZA'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

// action
function orderPizza() {
    return {
        type : ORDER_PIZZA,
        quantity : 1
    }
}

// here I am taking input (by default its 1 but it can be given anything)
// instead of quantity use the term 'payload'
// in redux its the convention to use the term payload if you want to send any additional information
function restockCake(qty = 1) {
    return {
        type : CAKE_RESTOCKED,
        quantity : qty
    }
}



// reducer
const initialState = {
    numOfCakes : 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_PIZZA :
             return {
                ...state,
                numOfCakes : state.numOfCakes - 1
            }
        case CAKE_RESTOCKED :
             return {
                ...state,
                numOfCakes : state.numOfCakes + action.quantity
            }

        default :
            return state
    }
}



// store
const store = createStore(reducer)
console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('final state', store.getState()))

store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
// here we are passing additional information
store.dispatch(restockCake(4))


unsubscribe()