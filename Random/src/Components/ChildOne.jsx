import React from 'react'
import ChildTwo from './ChildTwo'

const ChildOne = ({username}) => {
  return (
    <>
        <div>ChildOne</div>
        <ChildTwo username={username}/>
    </>
    
  )
}

export default ChildOne