import {useState} from 'react'
import { FaTimes } from 'react-icons/fa'

const GroceryItem = ({item,onDelete,onEditItem}) => {
    const [editable,setEditable]= useState(false)
    const [setSave, updateSave] = useState(false)
    const [entry,setEntry]= useState ({itemname:item.item,units:item.units,price:item.price})
    const {itemname,price,units} = entry
    const handleEdit = (e)=>{
        if(!setSave){
            setEditable(true)
            e.target.innerText = 'Save'
            updateSave(true)
        }
        else{
            setEditable(false)
            onEditItem(item.id,entry)
            e.target.innerText = 'Edit'
            updateSave(false)

        }
       
    }
    return (
        <>
        <tr key={item.id}>
        <td key="buton"><FaTimes onClick={()=>onDelete(item.id)}/></td>
        <td key="name" contentEditable={editable} value={itemname} onInput={(e)=>setEntry({...entry,itemname:e.target.innerText})}>{item.item}</td>
        <td key="price" contentEditable={editable}value={price} onInput={(e)=>setEntry({...entry,price:e.target.innerText})}>{item.price}</td>
        <td key="quantity" contentEditable={editable}value={units} onInput={(e)=>setEntry({...entry,units:e.target.innerText})}>{item.units}</td>
        <td key="total">{item.units * item.price}</td>
        <td key="button"><button  type="button" onClick={handleEdit} className="edit">Edit</button></td>
        </tr>
        </>
    )
}

export default GroceryItem
