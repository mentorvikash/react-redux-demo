import React from 'react'
import { connect } from 'react-redux'

function ItemContiner(props) {
  return (
    <div>
    <p><b>No of Item</b> {props.items} </p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) =>{
    const ifCakeItem = ownProps.cake ? state.cake.noOfCakes : state.iceCream.noOfIceCream
    return {
        items: ifCakeItem,
    }
}

export default connect(mapStateToProps)(ItemContiner)