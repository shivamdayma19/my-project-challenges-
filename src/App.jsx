import { useState } from 'react'

import { Link, Route, Routes } from 'react-router-dom'
import Counter from '../Components /Counter'

import Modal from '../Components /Modal'
import Toggle from '../Components /Toggle'
import Acordian from '../Components /Acordian'
import Greeting from '../Components /Greeting'
import Rating from '../Components /Rating'
import Pagination from '../Components /Pagination'
import Password from '../Components /Password'
import Search from '../Components /Search'
import Tab from '../Components /Tab'
import Todo from '../Components /Todo'
import LogicPrac from '../Components /LogicPrac'




function App() {


  return (
    <>
    <LogicPrac/>
   <nav>
    <div className=''>
      <Link className='border p-2 bg-blue-300 rounded ' to="/counter">counter  </Link>
    <Link className='border p-2 bg-blue-300 rounded ' to="/modal">Modal  </Link>
    <Link className='border p-2 bg-blue-300 rounded ' to="/toggle">Toggle  </Link>
    <Link className='border p-2 bg-blue-300 rounded ' to="/acordian">Acordian  </Link>
    <Link className='border p-2 bg-blue-300 rounded ' to="/greeting">Greeting  </Link>
    <Link className='border p-2 bg-blue-300 rounded ' to="/rating">Rating  </Link>
    <Link className='border p-2 bg-blue-300 rounded ' to="/pagination">Pagination</Link>
    <Link className='border p-2 bg-blue-300 rounded '  to="/password">Password</Link>
    <Link className='border p-2 bg-blue-300 rounded '  to="/search">Search</Link>
    <Link className='border p-2 bg-blue-300 rounded '  to="/tab">Tab</Link>
    <Link className='border p-2 bg-blue-300 rounded '  to="/todo">Todo list</Link>
    
    
    </div>

    <Routes>
     <Route path="/counter" element={<Counter/>}></Route>
     <Route path="/modal" element={<Modal/>}></Route>
     <Route path="/toggle" element={<Toggle/>}></Route>
     <Route path="acordian" element={<Acordian/>}> </Route>
     <Route path="greeting" element={<Greeting/>}></Route>
     <Route path="rating" element={<Rating/>}></Route>
     <Route path="pagination" element={<Pagination/>}></Route>
     <Route path="password" element={<Password/>}></Route>
      <Route path="search" element={<Search/>}></Route>
      <Route path="tab" element={<Tab/>}></Route>
      <Route path="todo" element={<Todo/>}></Route>
      
      
      
    </Routes>

   </nav>
    </>
  )
}

export default App;
