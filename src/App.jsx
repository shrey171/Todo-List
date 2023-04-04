import { useState } from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-fluid'>
    <Header title="Todos List"/>
    <Todos/>
    <Footer/>
    </div>
  )
}

export default App
