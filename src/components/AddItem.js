import React from 'react'
import { useState } from 'react'
const AddItem = ({onAddItem}) => {
    const [item,setName]= useState('')
    const [units,setQty]= useState('')
    const [price,setPrice]= useState('')
    const onSubmit =(e)=>{
        e.preventDefault()
        if(!item){
            alert('Please add Item')
            return
        }
        onAddItem({item,price:+price,units:+units})
        setName('')
        setQty('')
        setPrice('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input type='text' 
            placeholder="Item"
            value ={item}
            onChange={(e)=> setName(e.target.value)}/>
            <input type='text' 
            placeholder="Price"
            value={price}
            onChange={(e)=> setPrice(e.target.value)}/>
            <input type='text'
            placeholder="Quantity"
            value={units}
            onChange ={(e)=> setQty(e.target.value)}/>
            <input type="submit" vaue="Add Item"/>
        </form>
    )
}

export default AddItem
