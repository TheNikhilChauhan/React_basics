import { useState, useCallback, useEffect, useRef } from "react"


function App() {
  const [length, setLength] = useState(8)
  const [numCheck, setNumCheck] = useState(false)
  const [charCheck, setCharCheck] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrustwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numCheck) str += '0123456789'
    if(charCheck) str += '~!@#$%^&*{}[]_-=+'

    for( let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numCheck, charCheck, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numCheck, charCheck, passwordGenerator])

  return (
    <>
      <h1 className=" text-xl text-white justify-center text-center">Password Generator</h1>
      <div className="w-full max-w-md mx-auto rounded-lg p-3 m-8 text-white font-bold bg-gray-600">
        <div className="px-3 py-2 rounded-md  flex mt-3">
          <input type="text"
          value={password}
          className="w-full rounded-md outline-none px-3 py-2 text-green-500" 
          placeholder="password"
          readOnly 
          ref={passwordRef}/>
          <button className="bg-blue-500 rounded-lg p-3 shrink-0 hover:bg-blue-800"
          onClick={copyPasswordToClipboard}> Copy </button>
        </div>

        <div className="flex gap-4  mt-5">
          <div className="flex ">
            <input type="range" min={6} max={50} value={length} className=" cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div>
            <input type="checkbox"  
            defaultChecked = {numCheck} 
            id="numInput"
            onChange={() => {
              setNumCheck((prev) => !prev)
              }}/>
            <label>Numbers</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked = {charCheck} 
            id="charInput" onChange={() => {
              setCharCheck((prev) => !prev)
              }}/>
            <label>Characters</label>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
