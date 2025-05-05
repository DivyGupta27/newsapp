import { useContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import themeMode from './contextapi/themeMode'
import ErrorPage from './components/ErrorPage'
function App() {
  const {theme}=useContext(themeMode)
  useEffect(()=>{
    let htmlTag=document.querySelector('html')
    htmlTag.classList.remove('light','dark')
    htmlTag.classList.add(theme)
  },[theme])

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<News category="top"/>}/>
      <Route path='/business' element={<News category="business"/>}/>
      <Route path='/crime' element={<News category="crime"/>}/>
      <Route path='/domestic' element={<News category="domestic"/>}/>
      <Route path='/education' element={<News category="education"/>}/>
      <Route path='/entertainment' element={<News category="entertainment"/>}/>
      <Route path='/food' element={<News category="food"/>}/>
      <Route path='/health' element={<News category="health"/>}/>
      <Route path='/lifestyle' element={<News category="lifestyle"/>}/>
      <Route path='/politics' element={<News category="politics"/>}/>
      <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
