import GroceryRow from "./GroceryRow"


const GroceryTable = ({list,onDelete,onEditItem}) => {
    
    return (
    <table>
    <thead>
    <tr>
        <th>Delete</th>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Edit</th>
    </tr>
    </thead>
    <tbody>
    
    {list.map((item)=>(
        <GroceryRow item={item} onDelete={onDelete} onEditItem={onEditItem}/>
    ))}
    </tbody>
    </table>   
    )
}

export default GroceryTable
