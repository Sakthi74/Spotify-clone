import React from 'react'
import Sidebar from './Components/Sidebar'
import BrowseAll from './Components/BrowseAll'
import Browsepage from './Pages/Browsepage'
import GoodAfternoonpage from '../src/Pages/GoodAfternoonpage'
import Timelinex from './Components/Timeline'
import KillingmoonPage from '../src/Pages/KillingmoonPage'
import Greenpage from '../src/Pages/MainGreenpage'
import MainGreenpage from '../src/Pages/MainGreenpage'
import Brownpage from './Components/Brownpage'
import Mainbrownpage from './Pages/Mainbrownpage'
import Playlist from './Components/Playlist'
import Playlistpage from './Pages/Playlistpage'
import Podcastpage from "./Pages/Podcastpage"
import Focus from './Components/Focus'
import Focuspage from './Pages/Focuspage'
// import Mainbrownpage from './Pages/Mainbrownpage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Routingpage from './Components/Routingpage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Routingpage/>} />

          <Route path='/podcast' element={<Podcastpage />} />
          <Route path='/playlist' element={<Playlistpage />} />
          <Route path='/focus' element={<Focuspage />} />
          <Route path='/green' element={<MainGreenpage/>} />
          <Route path='/brown' element={<Mainbrownpage />} />
          <Route path='/killingmoon' element={<KillingmoonPage/>} />
          <Route path='/Goodafternoonpage' element={<GoodAfternoonpage />} />
                   <Route path='/browsepage' element={<Browsepage/>} />


         
        </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
