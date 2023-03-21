import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
  const [value, setValue] = useState(1)
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of Cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cakes</button>
        <input type='number' value={value} onChange={e => setValue(parseInt(e.target.value))}   />
        <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
      
    </div>
  )
}

export default CakeView
