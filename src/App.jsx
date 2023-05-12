
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
 const loadedcoffees = useLoaderData()
 const [coffees, setcoffees] = useState(loadedcoffees);

  return (
    <>
   <div className='m-20'>
   <h2 className='text-6xl text-purple-600'>Hot Hot cold coffee ${coffees.length}</h2>
    <div className='grid md:grid-cols-2 gap-4'>
    {
      coffees.map(coffee => <CoffeeCard
      key={coffee._id}
      coffee={coffee}
      coffees={coffees}
      setcoffees={setcoffees}
      ></CoffeeCard> )
     }
    </div>
   </div>
    </>
  )
}

export default App
