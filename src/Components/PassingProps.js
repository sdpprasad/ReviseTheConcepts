//for  multiple props

// function PassingProps({person}){
// return(
// <div>
//     <h1>hi {person.name} age is {person.age} with {person.emoji}</h1>
// </div>
// )
// }
// export default PassingProps


//for passing array

// function PassingProps({person}){
// const persons=['asd','ffsef','ewfewf','frwe'];
    
// return(
// <div>
// {persons.map((per,index)=>(
// <h1 key={index}>{per}</h1>
// ))}
// </div>
// )
// }
// export default PassingProps


function PassingProps({person}){
    const persons=['asd','ffsef','ewfewf','frwe'];
        
    return(
    <div>
        <ul>
    {persons.map(per=>(
    <li>{per}</li>
      ))}
      </ul>
    </div>
    )
    }
    export default PassingProps