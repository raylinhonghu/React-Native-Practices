import React from 'react';

// pure function
// we can mutate it, but not replace the entire thing
const User = (props) => {
  // no need render
  let age = props.age ? props.age : 'NA';
  return (<div>Age: {props.age} | Name: {props.children}</div>)
}

export default User;
