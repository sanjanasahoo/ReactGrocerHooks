import React from 'react'
import { useState } from 'react'
const AddItem = ({onAddItem}) => {
    const [entry,setEntry]= useState ({item:'',units:'',price:''})
    const { item,units,price} = entry
    const onSubmit =(e)=>{
        e.preventDefault()
        if(!item){
            alert('Please add Item')
            return
        }
        onAddItem({item,price:+price,units:+units})
        setEntry({item:'',units:'',price:''})
    }
    return (
        <form onSubmit={onSubmit}>
            <input type='text' 
            placeholder="Item"
            value ={item}
            onChange={(e)=> setEntry({...entry,item:e.target.value})}/>
            <input type='text' 
            placeholder="Price"
            value={price}
            onChange={(e)=> setEntry({...entry,price:e.target.value})}/>
            <input type='text'
            placeholder="Quantity"
            value={units}
            onChange ={(e)=> setEntry({...entry,units:e.target.value})}/>
            <input type="submit" vaue="Add Item"/>
        </form>
    )
}

export default AddItem
