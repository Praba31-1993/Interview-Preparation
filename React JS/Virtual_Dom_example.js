import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  

  const [time, setTime] = useState()
      
  var Time = new Date().toLocaleTimeString()
  
  useEffect(()=>{
    setTime(setInterval(Time, 1000))
  })
    
  
 
  
  return (
    <div className="App">
        <h1>Example of Virtual Dom rendering</h1>
      <h1>Hello World</h1>
      <h2>Now the Time is</h2>
      <p>{Time}</p>
     
    </div>
  );
}

export default App;
