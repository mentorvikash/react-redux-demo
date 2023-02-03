import React, { useState } from 'react'
import { buyCake } from '../redux'
import {connect} from 'react-redux'

function NewCakecontainer(props) {
  const [number, setNumber] = useState(1)

    return (
    <div>
    <input type="text" value={number} onChange={ e => setNumber(e.target.value) }></input>
    <p>no of cakes: {props.noOfCakes}</p>
    <button onClick={()=>props.buyCake(number)} >Buy {number} Cakes</button>
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
    buyCake: (number) => dispatch(buyCake(number))
  }
} 


export default connect(mapStateToProps, mapDispatchToProps)(NewCakecontainer)