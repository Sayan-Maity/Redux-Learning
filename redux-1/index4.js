// New Project :

const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware



const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'


// action :
const fetchUserRequest = () => {
    return {
        type : FETCH_USERS_REQUEST,
    }
}
const fetchUserSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}
const fetchUserFailure = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}



// reducers :
const initialState = {
    loading : false,
    users : [],
    error : ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST :
            return {
                ...state,
                loading : true,
            }
        case FETCH_USERS_SUCCESS :
            return {
                loading : false,
                users : action.payload,
                error : ''
            }
        case FETCH_USERS_FAILURE :
            return {
                loading : false,
                users : [],
                error : action.payload
            }
        
        default : return state
    }
}


//  Making the API call
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            // res.data is the array of users
            const users = res.data.map(user => user.username)
            dispatch(fetchUserSuccess(users))
        })
        .catch(err => {
            // err.message is the error of the api request
            dispatch(fetchUserFailure(err.message))
        })

    }
}

// store :
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchUsers())
















