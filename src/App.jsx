import { useState } from 'react'
import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full overflow-x-hidden min-h-screen items-center flex flex-col background relative'>
       <h1 className='bg-white 
       text-3xl px-10 py-2 rounded-3xl font-bold absolute w-11/12 text-center mt-[40px]'>Random Gifs</h1>

       <div className='flex flex-col gap-4 w-full items-center mt-5 mb-5'>
           <Random />

           <Tag />
       </div>
        
    </div>
  )
}

export default App
