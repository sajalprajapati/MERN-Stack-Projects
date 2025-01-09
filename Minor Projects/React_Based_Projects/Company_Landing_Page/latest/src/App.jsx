import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Master from './pages/Master'
import Menu from './pages/Menu'
import Home from './pages/Home'
import Location from './pages/Location'
import About from './pages/About'
import Contact from './pages/Contact'
import LostPage from './pages/LostPage'



import Navbar from './components/Navbar'
import Frame from './components/Frame'



const App = () => {
  return (
    <div>
      {/*  here comes my navbar */}
       <Navbar/>
 
     
      {/* here comes my frame --the main container */}
      {/* <Frame/> */}

      {/* below are my routes and route */}
      <Routes>
         <Route path='/' element={<Master/>}>
           <Route index element={<Menu/>}/>
           {/* <Route path='/menu' element={<Menu/>}/> */}
           <Route path='/location' element={<Location/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path="*" element={<LostPage/>}/>
         </Route>
      </Routes>
    </div>
  )
}

export default App