const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators


const ORDER_PIZZA = 'ORDER_PIZZA'
const PIZZAS_RESTOCKED = 'PIZZAS_RESTOCKED'

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
function restockPizza(qty = 1) {
    return {
        type : PIZZAS_RESTOCKED,
        quantity : qty
    }
}



// reducer
const initialState = {
    numOfPizzas : 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_PIZZA :
             return {
                ...state,
                numOfPizzas : state.numOfPizzas - 1
            }
        case PIZZAS_RESTOCKED :
             return {
                ...state,
                numOfPizzas : state.numOfPizzas + action.quantity
            }

        default :
            return state
    }
}



// store
const store = createStore(reducer)
console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('final state', store.getState()))

// (a) Either we can write like this (mostly used):
// store.dispatch(orderPizza())
// store.dispatch(orderPizza())
// store.dispatch(orderPizza())
// // here we are passing additional information
// store.dispatch(restockPizza(4))



// (b) Or we can write like this (not really necessary but good to know):
const actions = bindActionCreators({orderPizza, restockPizza}, store.dispatch)
actions.orderPizza()
actions.orderPizza()
actions.orderPizza()
actions.restockPizza(4)



unsubscribe()



