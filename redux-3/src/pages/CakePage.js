import React from 'react'
import { buyCake } from '../redux/index'
import { connect } from 'react-redux'

const CakePage = (props) => {
  return (
    <div>
      <h1>Total Cakes Left = {props.numOfCake} </h1>
      <button onClick={props.buyCake} >Buy Cake </button>
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    numOfCake : state.numOfCake
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake : () => dispatch(buyCake())
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(CakePage)
