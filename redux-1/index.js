/*
    <<<<<<<<< Redux Lifecycle >>>>>>>>


        +------ Javascript -----+
        |         (app)         |
        |                       |
        |                       |
      Store                  Action
        |                       |
        |                       |
        |                       |
        +-------- Reducers -----+


    So, (App) --> Action --> Reducers --> Store --> (App)               


*/




const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'


// Action
// (object : property)
function buyCake() {
    return {
        type : BUY_CAKE,
        info : 'First redux action'
    }
}


// Reducers
// {previousState, action} => newState
// basically the shopkeeper has total 10 cakes
const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE : return {
            ...state, // spread operator (i am making copy of the object)
            numOfCakes : state.numOfCakes - 1
        }

        default : return state
    }
}


// Redux Store
// (1) redux store holding the application state
const store = createStore(reducer)
console.log('Initial state', store.getState())

// (4) allow the app to subscribe to changes in the store via subscribe(listener)
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

// (3) allows state to be updated via dispatch(action)
// basically each action determines we are buying a cake
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()




















