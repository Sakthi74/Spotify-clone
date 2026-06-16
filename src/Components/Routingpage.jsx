import React from 'react'
import { useNavigate } from 'react-router-dom'

const Routingpage = () => {
   const navigate = useNavigate();
     const handleNavigation = (path) => {
  navigate(path);
};
    
    return (

    <div>
          <nav className='text-white'>
              <ul className='flex gap-2'>
               <li className='p-3 bg-gold border-2 border-white cursor-pointer' onClick={() => handleNavigation("/playlist")}>PLAYLIST</li>
<li className='p-3 bg-gold border-2 border-white cursor-pointer'  onClick={() => handleNavigation("/podcast")}>PODCAST</li>
<li className='p-3 bg-gold border-2 border-white cursor-pointer' onClick={() => handleNavigation("/green")}>GREEN</li>
<li className='p-3 bg-gold border-2 border-white cursor-pointer' onClick={() => handleNavigation("/brown")}>BROWN</li>
<li className='p-3 bg-gold border-2 border-white cursor-pointer' onClick={() => handleNavigation("/focus")}>FOCUS</li>
<li className='p-3 bg-gold border-2 border-white cursor-pointer' onClick={() => handleNavigation("/killingmoon")}>KILLINGMOON</li>
                    

                <li className='p-3 bg-gold border-2 border-white cursor-pointer'  onClick={() => handleNavigation("/browsepage")}>BROWSEPAGE</li>
                <li className='p-3 bg-gold border-2 border-white cursor-pointer'  onClick={() => handleNavigation("/goodafternoonpage")}>GOODAFTERNOON PAGE</li>  
              </ul>
      </nav>
    </div>
  )
}

export default Routingpage
