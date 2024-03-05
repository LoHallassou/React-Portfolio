import { useState } from 'react';
import Navbar from './components/navbar';
import Intro from './components/intro.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className='App'>
       <Navbar/>
       <Intro/>      
       </div>
      

  )
}

export default App
