import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const ChildThree = ({username}) => {

  const {user} = useContext(UserContext)


  return (
    <>
        <div>ChildThree {username}</div>
        <div>ChildThree {user}</div>
        
    </>
    
  )
}

export default ChildThree