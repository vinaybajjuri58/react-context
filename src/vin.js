import React,  { useContext } from 'react'
import { MContext } from './context/context'
const Vin =()=>{
    const [count, setCount ] = useContext(MContext);

    const increment = ()=>{
        console.log(count)
        setCount(prevCount => prevCount+1)
    }
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>increment()}> Increment </button>
        </div>
    )
}
export default Vin ;