import React from 'react'
import '../App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Traineesadd from './Traineesadd';
import Traineesread from './Traineesread';
import Traineesupdate from './Traineesupdate';

function Navbar() {
  return (
    <div>
        
            <BrowserRouter>
              <div className='flexnav'>
              <Link to='/'>ADD TRAINEES</Link>
              <Link to='/list'>LIST TRAINEES</Link>
              <Link to='/update'>LIST TRAINEES</Link>
              </div>
            <Routes>
                <Route exact path='/' element={<Traineesadd />} />
                <Route path='/list' element={<Traineesread />} />
                <Route path='/update' element={<Traineesupdate />} />
            </Routes>
            
            </BrowserRouter>
        
    </div>
  )
}

export default Navbar