import {createSlice} from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

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
        },
    },
    extraReducers : (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--
        })
    },
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions