import { useState, useCallback ,useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setchar] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);
  const generatePassword = useCallback(() => {
    let pass="";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()-+";

    for(let i=1; i<=length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length +1));
    }
    setPassword(pass);

  },[length, numberAllowed, charAllowed]) 

  const copypasswordtoclipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length , numberAllowed, charAllowed, generatePassword])
  return (
    <>
      <div className="w-full max-w-max mx-auto p-4 rounded-lg shadow-md bg-cyan-900 my-10" >
        <div className="flex flex-row items-center mb-9" >
          <input 
          type="text" 
          value={password} 
          className="w-full p-2 border rounded" 
          placeholder="Password" 
          ref={passRef}
          readOnly
          />
          <button
          className=" bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={copypasswordtoclipboard}
          >
            copy
          </button>
        </div>
        <div className="w-full flex mx-auto rounded-lg  " >
          <div className="flex flex-row items-center mr-2.5" >
            <input 
            type="range"
            min = {6}
            max = {50}
            value={length}
            onChange = {(e) => setLength(e.target.value)}
            className="cursor-pointer w-auto" />
              <label className="text-sm text-white">Length: {length} </label>
          </div>
          <div>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange = {(e) => {
              setNumber((pre) => !pre);
            }}  
            />
            <label className="ml-2 text-sm text-white mr-2">Include Numbers</label>

            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange = {(e) => {
              setchar((pre) => !pre);
            }}  />              
            <label className="ml-2 text-sm text-white">Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
