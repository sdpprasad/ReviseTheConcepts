import { useState } from "react";

export default function EventUseState(){
    var [count,setCount]=useState(0)   //for counter
    var [incrementBY,setincrementBY]=useState(1) //for what value increase

    function addition(){
        setCount (count + incrementBY);
        
    }

    function subtracton(){
        setCount(count-incrementBY);
    }
    function reset(){
        setCount(count=0);
    }

    //  this is Choosing of increment value
    function addition1(){
        setincrementBY (incrementBY+1);
        
    }

    function subtracton1(){
        setincrementBY(incrementBY-1);
    }
    function reset1(){
        setincrementBY(incrementBY=0);
    }
return(
    <>
    
    <h1>Conter Value:{count}</h1>
    <button onClick={addition} style={{border:"2px dashed blue", margin:"3px"}}>Increment</button>
    <button onClick={subtracton} style={{border:"2px dashed blue", margin:"3px"}}>DEcrement</button>
    <button onClick={reset} style={{border:"2px dashed blue", margin:"3px"}}>Reset</button>
   
   
    <h1>Choosing of increment value:{incrementBY}</h1>
    <button onClick={addition1} style={{border:"2px dashed blue", margin:"3px"}}>Increment</button>
    <button onClick={subtracton1} style={{border:"2px dashed blue", margin:"3px"}}>DEcrement</button>
    <button onClick={reset1} style={{border:"2px dashed blue", margin:"3px"}}>Reset</button>

    </>
)
}