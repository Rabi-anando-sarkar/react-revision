import { useState } from 'react'
import './App.css'
import Parent from './Components/Parent'
import UserContextProvider from './context/UserContextProvider'
import { ChaiProvider } from './context/ChaiContext'

function App() {

  return (
    <UserContextProvider>
    <ChaiProvider>
      <Parent/>
    </ChaiProvider>
    </UserContextProvider>
  )
}

export default App
