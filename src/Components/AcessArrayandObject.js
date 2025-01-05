export default function AcessArrayandObject(){
     const Fruits=[
        {
            name:'Apple',
            price:15,
            emoji:'🍎'
        },
        {
            name:'Banana',
            price:5,
            emoji:'🍌'
        },
        {
            name:'orange',
            price:10,
            emoji:'🍊'
        },
        {
            name:'Grapes',
            price:10,
            emoji:'🍇'
        }
     ];
    return(
        <div><ul>
            {Fruits.map((item)=>(
                <li key={item.name}>{item.name}{item.emoji}{item.price}</li>
            ))}
            </ul>
        </div>
    )
}