const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecreams : 20
}

const icecreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered : state => {
            state.numOfIcecreams -= 1
        },
        restocked : (state, actions) => {
            state.numOfIcecreams += actions.payload
        }
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions