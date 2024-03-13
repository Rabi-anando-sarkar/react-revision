import React, { useContext } from 'react'
import ChildThree from './ChildThree'
import UserContext from '../context/UserContext'

const ChildTwo = ({username}) => {

  const {user} = useContext(UserContext)

  return (
    <>
        <div>ChildTwo</div>
        <div>ChildTwo {user}</div>
        <ChildThree username={username}/>
    </>
  )
}

export default ChildTwo