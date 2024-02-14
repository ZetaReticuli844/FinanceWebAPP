import {useState} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser'
import Login from './pages/Login'
import Logout from './pages/Logout'
import UserContexProvider from './context/UserContextProvider'
import Welcome from './pages/Welcome'
import AddIncome from './pages/CreateIncome'
const App = () => {
  
  return (
<BrowserRouter>
<UserContexProvider>
<Navbar/>
    <Routes>
  <Route path='/' Component={Welcome}/>     
  <Route path="/Home/" Component={Home}/>
  <Route path="/register" Component={CreateUser}/>
  <Route path="/login"  Component={Login}/>
  <Route path="/logout" Component={Logout}/>
  <Route path='/create/income' Component={AddIncome}/>
    </Routes>
    </UserContexProvider>
    </BrowserRouter>

  )
}

export default App
