import React from 'react';

const User2 = (props) => {
  return(
    <li>
      <span>Age: {props.age}, Name: {props.children} </span>
      <input onChange={props.changeEvent} value={props.children}/>
      <button onClick={props.deleteItem}>Remove</button>
    </li>
  )
}

export default User2;
