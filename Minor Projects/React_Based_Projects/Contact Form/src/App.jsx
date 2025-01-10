import React from 'react'
import ContactUs from './components/ContactUs'
import Details from './components/Details'

const App = () => {
  return (
    <div className='flex flex-col w-screen h-screen items-center relative  bg-slate-100'>
       
      <div className='absolute top-[143px] gap-y-4 '>
        <ContactUs/>
      </div>


      <div className='absolute w-[1161px] h-[600px] top-[286px] left-[198px] gap-[81px]  '>
        <Details/>
      </div>
    </div>
  )
}

export default App