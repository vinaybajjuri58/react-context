import React,{ useContext } from 'react'
import { MContext } from './context/context' ;

const Vin3 = () => {
    const [count, setCount ] = useContext(MContext);

    const decrement = ()=>{
        console.log(count)
        setCount(prevCount => prevCount-1)
    }

    return(
        <div>
            <button onClick={()=> decrement()}> decrement</button>
        </div>
    )
}
export default Vin3 