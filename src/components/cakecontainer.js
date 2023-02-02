import React from 'react'
import { buyCake } from '../redux'
import {connect} from 'react-redux'

function Cakecontainer(props) {
  return (
    <div>
    <p>no of cakes: {props.noOfCakes}</p>
      <button onClick={props.buyCake} >Buy Cake</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    noOfCakes: state.cake.noOfCakes  
  }
} 

function mapDispatchToProps(dispatch) {
  return {
    buyCake: () => dispatch(buyCake())
  }
} 


export default connect(mapStateToProps, mapDispatchToProps)(Cakecontainer)