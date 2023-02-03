import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContiner(props) {
  return (
    <div>
    <p><b>No of Item</b> {props.items} </p>
    <button onClick={props.buyItem} >Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) =>{
    const ifCakeItem = ownProps.cake ? state.cake.noOfCakes : state.iceCream.noOfIceCream
    return {
        items: ifCakeItem,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const buy = ownProps.cake ?
    () => dispatch(buyCake()) :
    () => dispatch(buyIceCream()) 
    return {
        buyItem : buy
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContiner)