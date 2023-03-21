import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()


  return (
    <div>
        <h2>Number of IceCream - {numOfIcecreams} </h2>
        <button onClick={() => dispatch(ordered())}>Order IceCream</button>
        <button onClick={() => dispatch(restocked(2))}>Restock IceCream</button>
    </div>
  )
}

export default IcecreamView
