import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser'
import Login from './pages/Login'
const App = () => {
  return (
<BrowserRouter>
<Navbar/>
    <Routes>
  <Route path="/" Component={Home}/>
  <Route path="/register" Component={CreateUser}/>
  <Route path="/login" Component={Login}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
