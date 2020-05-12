import React from 'react';
import './FixedMe.css';


export const  Fixed = (props) => {
  return ( 
    <div style={{ margin:0,padding:0, overflowY: 'scroll', width: '99%', height: '410px'}}>
    {props.children}
    </div>
  )
}