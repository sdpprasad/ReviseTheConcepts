export default function Fruit({ name, emoji, price }) {
    return (
        <tr>
            <td style={{ border: "5px solid red", padding: "8px" }}>{name}</td>
            <td style={{ border: "5px solid red", padding: "8px" }}>{emoji}</td>
            <td style={{ border: "5px solid red", padding: "8px" }}>{price}</td>
        </tr>
    );
}
