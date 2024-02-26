import React from 'react'
import { useNavigate } from 'react-router-dom'
const Welcome = () => {
  const navigate=useNavigate()
React.useEffect(()=>{
navigate('/login')
  })
}

export default Welcome
