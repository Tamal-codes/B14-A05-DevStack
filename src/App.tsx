
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Technologies from './components/Technologies';
import { Suspense } from 'react';
import type { ITech } from './Type/techType';


const technologiFetch = async ():Promise<ITech[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}



function App() {
  const technologiPromise = technologiFetch();

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback = {<h2>Loading...</h2>}>
        <Technologies technologiPromise={technologiPromise} />
      </Suspense>
    </>
  )
}

export default App
