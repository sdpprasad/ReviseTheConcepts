//for single input and single useState

// import { useState } from "react";
// export default function Form(){
//     var[name,setName]=useState("")
//     return(
//         <>
//         <form>
//         <input  onChange={(e)=>setName(e.target.value)} type="text" value={name} placeholder="name"></input>
//         </form>
//         </>
//     )
// }

//for  multiple input  with single useState

import { useState } from "react";
export default function Form(){
    const [name,setName]=useState({first:" ",last:" "})
    function handle(e){
        e.preventDefault() ;   //this methon help for stop the page reload when we click on button
    // console.log(name.first)  //particular value only
    console.log(name);  //if you want in object manner  put name  {first:'',last:''}->output
   
}
    return(
        <>
        {name.first}-{name.last}
        <form>
        <input  onChange={(e)=>setName({...name,first:e.target.value})} type="text" value={name.first} placeholder="name"></input>
        <input  onChange={(e)=>setName({...name,last:e.target.value})} type="text" value={name.last} placeholder="name"></input>
        <button onClick={(e)=>handle(e)}>submit</button>
        </form>
        </>
    )
}

