import { useState , useCallback} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordGenerator= useCallback(()=> {
    

  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <h1 className='text-white text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default App
