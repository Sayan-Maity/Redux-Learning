import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
  return (
    <div className='cake'>
        <h1>Count of the Cakes - {props.numOfCakes}</h1>
        <button onClick={props.buyCake}>Buy a cake</button>
    </div>
  )
}


// step 1 :
const mapStateToProps = state => {
    return {
        numOfCakes : state.numOfCakes
    }
}

// step 2 :
const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}


// export default CakeContainer
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)