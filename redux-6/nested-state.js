const redux = require('redux')
const produce = require('immer').produce

const createStore = redux.createStore


const STREET_UPDATED = 'STREET_UPDATED'

// action
const updateStreet = (street) => {
    return {
        type : STREET_UPDATED,
        payload : street,
    }
}

// reducer
const initialState = {
    name : 'Sayan',
    address : {
        street : '123 Main St',
        city : 'Boston',
        state : 'MA'
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED :
            // non mutable :
            // return {
            //     ...state,
            //     address : {
            //         ...state.address,
            //         street: action.payload,
            //     },
            // }

            // mutable :
        return produce(state, (draft) => {
            draft.address.street = action.payload
        })
        
        default : 
            return state
    }
}


// store
const store = redux.createStore(reducer)
console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState())
})

store.dispatch(updateStreet('near Laksmi Narayan mandir'))

unsubscribe()








