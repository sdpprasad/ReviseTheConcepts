import Fruit from "./Fruit";

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

    return (



         //this for accessing values in same component

        // <div><ul>
        //     {Fruits.map((item)=>(
        //         <li key={item.name}>{item.name}{item.emoji}{item.price}</li>
        //     ))}
        //     </ul>
        // </div>


        //This is for accessing values in another comonent that is Fruit component
        <table style={{ borderCollapse: "collapse", width: "50%", margin: "20px auto", textAlign: "center" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Emoji</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Price</th>
                </tr>
            </thead>
            <tbody>
                {Fruits.map((fruit, index) => (
                    <Fruit key={index} name={fruit.name} emoji={fruit.emoji} price={fruit.price} />
                ))}
            </tbody>
        </table>
    );


}


