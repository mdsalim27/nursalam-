import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RoutLeyout from './compunent/RoutLeyout'
import Home from './compunent/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from './compunent/Contact'
import About from './compunent/About'
import Quote from './compunent/Quote'
import Service from './compunent/Service'
import Product from './compunent/Product'
import Products from './compunent/Products'

function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RoutLeyout />}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/service' element={<Service />}></Route>
      <Route path='/Products' element={<Products />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/quote' element={<Quote />}></Route>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
export default App
