import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Adduser from './Adduser';
import Listusers from './Listusers';
import Updateuser from './Updateuser';

function Navroutes() {
  return (
    <div>
        <BrowserRouter>
          <Link to='/'>ADD USER</Link>
          <Link to='/userlist'>USER LIST</Link>
          <Link to='/update'>UPDATE USER</Link>

        <Routes>
            <Route default path='/' element={<Adduser />} />
            <Route path='/userlist' element={<Listusers />} />
            <Route path='/update' element={<Updateuser />} />
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Navroutes