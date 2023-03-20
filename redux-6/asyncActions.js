const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware



const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEED = 'FETCH_USERS_SUCCEED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// action
const fetchUserRequested = () => {
    return {
        type : FETCH_USERS_REQUESTED,
    }
}
const fetchUserSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCEED,
        payload : users
    }
}
const fetchUserFailed = (error) => {
    return {
        type : FETCH_USERS_REQUESTED,
        payload : error
    }
}


// reducer
const initialState = {
    loading : false,
    users : [],
    error : '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED : 
            return {
                loading : true,
            }
        case FETCH_USERS_SUCCEED : 
            return {
                loading : false,
                users : action.payload,
                error : '',
            }
        case FETCH_USERS_FAILED : 
            return {
                loading : false,
                users : [],
                error : action.payload,
            }
    }
}


// making API call :
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequested())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            const users = res.data.map((user) => user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch((err) => {
            dispatch(fetchUserFailed(err.message))
        })

    }

}


// store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())






