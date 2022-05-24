import React from 'react'

const Decrement = (props) => {
    
  return (
    <div>
     <button onClick={props.Decrement}>{props.name} Clicked {props.Decrease} times</button>    </div>
  )
}
export default Decrement