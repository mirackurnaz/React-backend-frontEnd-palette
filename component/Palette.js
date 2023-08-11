import {useState} from 'react'
import { send } from '../socketApi';

function Palette({activeColor}) {
  const [color,setColor]=useState("");
  return (
    <div className='palette'>
    <input type='color'
     value={activeColor} 
     onChange={(event)=>setColor(event.target.value)}>

     </input>
    <button className='button' onClick={()=>{ send(color) }}>Click</button>
    </div>
  )
}

export default Palette