import React from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './Components/Gallery/gallery'
import About from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';

const App = () => {
  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
