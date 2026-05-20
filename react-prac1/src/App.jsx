import { useState } from 'react'

import Parent from "./components/Parent"
import UserContext from './UserContext'
import Counter from "./components/Counter"
import {Link, Route, Routes} from "react-router-dom"

function App() {
  
  const [user, setUser] = useState("bhuvan");
  const [age, setAge] = useState(21);
  console.log("rendering app")

  return(
    <div>
      <h1>App component</h1>
      <Routes>
        <Route path="/parent" element={<Parent/>}/>
        <Route path="/" element={<App/>}/>
      </Routes>
      <Link to="/parent">GO to parent</Link>
      
      
      <Counter />
    </div>
  )
}

export default App
