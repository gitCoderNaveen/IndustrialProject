import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import ImageSlider from './components/ImageSlider'
import ImageGrid from './components/ImageGrid'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <ImageSlider/>
      <ImageGrid/>
    </div>
  )
}

export default App
