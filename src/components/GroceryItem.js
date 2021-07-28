import React from 'react'
import { FaTimes } from 'react-icons/fa'
const GroceryItem = ({item,onDelete,onEditItem}) => {
    return (
        <>
        <tr key={item.id}>
        <td key="buton"><FaTimes onClick={()=>onDelete(item.id)}/></td>
        <td key="name">{item.item}</td>
        <td key="price">{item.price}</td>
        <td key="quantity">{item.units}</td>
        <td key="total">{item.units * item.price}</td>
        <td key="button"><button  type="button" onClick={(e)=>onEditItem(e,item.id)} className="edit">Edit</button></td>
        </tr>
        </>
    )
}

export default GroceryItem
