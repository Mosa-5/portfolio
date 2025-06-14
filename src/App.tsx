import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Single from './pages/single'

function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return <div  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-8 border-[#03055e5e] border-t-[#03045E] rounded-full animate-spin"
    ></div>;
  }


  return (
   <Routes>
    <Route index element={<Home/>} />
    <Route path='Project/:id' element={<Single/>} />
    </Routes>
  )
}

export default App
