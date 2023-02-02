import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
  return (
    <div>
    <p>no of Ice Cream: {props.noOfIceCream}</p>
    <button onClick={props.buyIcecream} >Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log({state})
    return {
        noOfIceCream: state.iceCream.noOfIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer) 