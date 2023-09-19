import { useState } from "react"


function App() {
  const [bgcolor, setColor] = useState('black')


  return (
    <>
      <div className=" w-full h-screen duration-200" style={{backgroundColor: bgcolor}}>
      

        <div className="fixed flex flex-wrap justify-center bottom-10 align-middle inset-x-1">
          <div className="flex flex-wrap bg-white rounded-3xl p-2 m-2 align-middle shadow-xl">
            <button className="text-white font-medium p-3 m-2 rounded-full " 
            style={{backgroundColor: 'blue'}}
            onClick={() => setColor('blue')}>Blue</button>

            <button className=" text-white font-medium p-3 m-2 rounded-full " 
            style={{backgroundColor: 'orange'}}
            onClick={() => setColor('orange')}>Orange</button>
            <button className="text-white font-medium p-3 m-2 rounded-full " 
            style={{backgroundColor: 'green'}}
            onClick={() => setColor('green')}>Green</button>
            <button className="text-white font-medium p-3 m-2 rounded-full  " 
            style={{backgroundColor: 'red'}}
            onClick={() => setColor('red')}>Red</button>

            <button className="text-white font-medium p-3 m-2 rounded-full " 
            style={{backgroundColor: 'purple'}}
            onClick={() => setColor('purple')}>Purple</button>

            <button className="text-white font-medium p-3 m-2 rounded-full " 
            style={{backgroundColor: 'pink'}}
            onClick={() => setColor('pink')}>Pink</button>

            <button className="text-white font-medium p-3 m-2 rounded-full " 
            style={{backgroundColor: 'black'}}
            onClick={() => setColor('black')}>Black</button>
            
            <button className="text-black font-medium p-3 m-2 rounded-full  border 3px border-solid " style={{backgroundColor: 'white'}}
            onClick={() => setColor('white')}>White</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
