import React from 'react'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import { Route,Routes } from 'react-router-dom'
import PageNotFound from '../PageNotFound'

const AllRoutes = () => {
  return (
    <div>
        <Routes >
            <Route path='/' element={ <Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes> 
    </div>
  )
}

export default AllRoutes