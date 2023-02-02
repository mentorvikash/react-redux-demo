import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux'; 

function HooksCakecontainer() {
    const noOfCakes = useSelector(state => state.cake.noOfCakes )
    const dispatch = useDispatch()
  return (
    <div>
    <p>no of cakes: {noOfCakes} </p>
      <button onClick={() => dispatch(buyCake())}  >Buy Cake</button>
    </div>
  )
}

export default HooksCakecontainer