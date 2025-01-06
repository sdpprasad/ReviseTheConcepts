import { useState } from "react";
export default function EventUseState(){
    var [count,setCount]=useState(0)

    function addition(){
        setCount (count + 1);
    }

    function subtracton(){
        setCount(count-1);
    }
    function reset(){
        setCount(count=0);
    }
return(
    <>
    <h1>Counter Value:{count}</h1>
    
    <button onClick={addition} style={{border:"2px dashed blue", margin:"3px"}}>Increment</button>
    <button onClick={subtracton} style={{border:"2px dashed blue", margin:"3px"}}>DEcrement</button>
    <button onClick={reset} style={{border:"2px dashed blue", margin:"3px"}}>Reset</button>

    </>
)
}