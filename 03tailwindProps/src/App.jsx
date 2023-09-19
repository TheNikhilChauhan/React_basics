import Card from "./components/Card"

function App() {
  // const myObj = {
  //   username: 'Harvey',
  //   age: 45
  // }

  // let newArr = [1, 2, 4]

  return (
   <>
    <h1 className=' bg-green-400 text-black p-4 rounded-md text-center'>Tailwind</h1>
    <Card username = 'Nikhil' btnText = 'Click Me'/>
    <Card username='Harvey' btnText = 'Check my Profile'/>
    <Card username='Louis' />
   </>
  )
}

export default App
