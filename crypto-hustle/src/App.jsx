import { useState, useEffect } from 'react'
import './App.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const App = () => {
  
  // list
  const [list,setList] = useState(null);
  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch()
    }
    }
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default App
