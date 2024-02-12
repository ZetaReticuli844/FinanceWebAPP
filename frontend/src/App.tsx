import {useState} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser'
import Login from './pages/Login'
import Logout from './pages/Logout'
import UserContexProvider from './context/UserContextProvider'
const App = () => {
  
  return (
<BrowserRouter>
<UserContexProvider>
<Navbar/>
    <Routes>
  <Route path="/" Component={Home}/>
  <Route path="/register" Component={CreateUser}/>
  <Route path="/login"  Component={Login}/>
  <Route path="/logout" Component={Logout}/>
    </Routes>
    </UserContexProvider>
    </BrowserRouter>

  )
}

export default App
