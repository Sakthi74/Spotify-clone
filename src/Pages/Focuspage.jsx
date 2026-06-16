import React from 'react'
import Focus from '../Components/Focus'
import Sidebar from '../Components/Sidebar'
import Freesignup from '../Components/Freesignup'

const Focuspage = () => {
  return (
      <div className='flex relative'>
          <Sidebar />
          <div>
              <Focus />
              <div className='absolute left-0 mr-56' >
                  <Freesignup />
                  </div>
              </div>
      
    </div>
  )
}

export default Focuspage
