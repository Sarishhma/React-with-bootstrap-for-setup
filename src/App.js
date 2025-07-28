
import { useEffect, useState } from 'react';
import './App.css';
import Color from "./MyComponent/Color";


function App() {
  const [color,setColor]=useState(()=>{
return localStorage.getItem("selectedcolor")|| "#295077ff";
  })

  useEffect(()=>{
    document.body.style.backgroundColor=color;
    localStorage.setItem("selectedcolor",color)
  },[color])
  return (

   <>
   <Color/>
   <div className="container">
    <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} />
    <p>selected color:{color}</p>
   </div>

  
   </>
  );
}

export default App;
