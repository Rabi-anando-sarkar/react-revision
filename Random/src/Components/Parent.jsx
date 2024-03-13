import React from 'react'
import ChildOne from './ChildOne'

const Parent = () => {
    const username = "Rabi"
  return (
    <>
        <div>Username is {username}</div>
        <ChildOne username={username}/>
    </>
  )
}

export default Parent