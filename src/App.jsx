import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Shop from './pages/Shop'
import Layout from './components/Layout'


let router=createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<Home/>} ></Route>
    <Route path='/shop' element={<Shop/>}></Route>
  </Route>
))

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
