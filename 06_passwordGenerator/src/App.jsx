import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() { 
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed ] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);
  const [password,setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*()-=_+[]{}|;:,.<>/?~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
      
    }

    setPassword(pass)

  },[length,numberAllowed,characterAllowed,setPassword])


  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-center mb-6 text-emerald-600 text-4xl font-mono font-semibold tracking-wide'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard} 
            className='outline-none text-rose-300 bg-blue-700 pink px-3 py-0.5'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={8}
              max={50}
              id='ranger'
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor='ranger'>length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={characterAllowed}
              id='characterInput'
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    
  )
}


export default App
