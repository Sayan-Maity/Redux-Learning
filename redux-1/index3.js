// Redux Workflow :



const redux = require ('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


// Action
function buyCake() {
    return {
        type : 'BUY_CAKE',
        desc : 'first redux action'
    }
}

function buyIceCream() {
    return {
        type : 'BUY_ICECREAM',
        desc : 'first redux action'
    }
}

// Reducers
const initialCakeState = {
    numOfCakes : 10
}

const initialIceCreamState = {
    numOfIceCream : 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }

        default : return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCream : state.numOfIceCream - 1
        }

        default : return state
    }
}

// Store
// you have to combine multiple reducers in a single reducer and then pass it to createStore method !!
const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})
const store = createStore(rootReducer)
console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('final state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()













