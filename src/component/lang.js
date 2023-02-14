import React from 'react'
import './lang.css'

export default function Lang(props) {
  return (
    <div className='lang'>
        
      <span>Google offered in: </span>
      <span id='lang'>{props.language}</span>
      
    </div>
  )
}
