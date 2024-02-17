import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser'
import Login from './pages/Login'
import Logout from './pages/Logout'
import UserContexProvider from './context/UserContextProvider'
import Welcome from './pages/Welcome'
import AddIncome from './pages/CreateIncome'
import DeleteIncome from './pages/DeleteIncome'
import DeleteExpense from './pages/DeleteExpense'

const App = () => {
  
  return (
<BrowserRouter>
<div className='bg-white dark:bg-dark-tremor-ring h-screen flex flex-col'>
<UserContexProvider>
<Navbar/>
    <Routes>
  <Route path='/' Component={Welcome}/>     
  <Route path="/Home" Component={Home}/>
  <Route path="/register" Component={CreateUser}/>
  <Route path="/login"  Component={Login}/>
  <Route path="/logout" Component={Logout}/>
  <Route path='/create/income' Component={AddIncome}/>
  <Route path='/income/delete/:id' Component={DeleteIncome}/>
  <Route path='/expense/delete/:id' Component={DeleteExpense}/>
  
    </Routes>
    </UserContexProvider>
    </div>
    </BrowserRouter>

  )
}

export default App
