import React from 'react'
import './wordbox.css'
import { BiMicrophone } from 'react-icons/bi';
import { FcSearch } from 'react-icons/fc';

export default function Wordbox() {
  return (
    <div className='box'>
      <FcSearch/>
      <input className='input'></input>
      <BiMicrophone className='mic'/>
    </div>
  )
}
