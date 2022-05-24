import React, { useState, useEffect } from 'react'
import House from './House'
export const Context = React.createContext({})
export default function Home() {
    const [user, setUser] = useState([])
    
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUser(data))
})
  return (
    <Context.Provider value={user}>
        <House/>
    </Context.Provider>
    )
}
