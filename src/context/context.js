import React,{ createContext, useState } from 'react' ;

export const MContext = createContext() ;

export const MProvider = (props)=>{
    const [ count, setCount] = useState(0)
    return(
        <MContext.Provider value={[count, setCount]} >
            {props.children}
        </MContext.Provider>
    )
}

