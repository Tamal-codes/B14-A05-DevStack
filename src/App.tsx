import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>

    </>
  )
}

export default App
