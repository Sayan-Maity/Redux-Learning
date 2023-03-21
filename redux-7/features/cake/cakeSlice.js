const createSlice = require('@reduxjs/toolkit').createSlice

// action :
// actions are automatically created using the reducers keywords, we don't have to specify it explicitly

// reducers :
const initialState = {
    numOfCakes : 10
}
const cakeSlice = createSlice ({
    name : 'cake',
    initialState,
    reducers : {
        ordered : (state) => {
            // we can directly mutate the state (since immer is used under the hood)
            state.numOfCakes -= 1
        },
        restocked : (state, action) => {
            state.numOfCakes += action.payload
        },
    },
})


module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
