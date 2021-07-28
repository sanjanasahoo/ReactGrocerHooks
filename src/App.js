import { useState} from 'react'

import './App.css';
import AddItem from './components/AddItem';
import GrandTotal from './components/GrandTotal';
import Grocery from './components/GroceryTable';
import Header from './components/Header'

function App() {
  const [grocery,setGrocery] =useState([
    {
        id:1,
        item: "yih",
        units: 1,
        price: 40
    },
    {
        id:2,
        item: "abc",
        units: 3,
        price: 20
    }
])
function onDeleteItem (id){
  setGrocery(grocery=>grocery.filter(item=>item.id!==id))
}
function onEditItem(id,{itemname,units,price}){
  setGrocery(grocery=> grocery.map(item=>{
    if(item.id === id){
      item.item = itemname
      item.price = price
      item.units = units
  }
  return item
   }))
}
  



function addItem(item){
  console.log(item)
  const id =Math.floor(Math.random()*10000) +1
  const newItem = {id,...item}
  console.log(newItem)
  setGrocery([...grocery,newItem])
}
  return (
    <div className="container">
     <Header />
     <AddItem onAddItem={addItem}/>
     {grocery.length >0 ? <Grocery list={grocery} onDelete={onDeleteItem} onEditItem={onEditItem}/>:<p>No items</p>}
     <GrandTotal grocery={grocery}/>
    </div>
  );
}

export default App;
