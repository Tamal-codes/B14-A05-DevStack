
import Navbar from './components/Navbar'
import Banner from './components/Banner'

const technologiPromise =async ()=>{
  const res = await fetch ('/data.json')
  const data = await res.json();
  return data;
}



function App() {
console.log(technologiPromise);

  return (
    <>
      <Navbar/>
      <Banner/>
      

    </>
  )
}

export default App
