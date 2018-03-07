import React from 'react';
import Child from './child';

const Parent = (props) => {
  return (
    <div>
      <Child doWhatever={props.changeTheWorldEvent} title={props.title}/>
      <Child doWhatever={props.keepTheWorldEvent} title={props.title}/>
    </div>
  )
}

export default Parent;
