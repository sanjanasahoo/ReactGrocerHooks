import { useState,useEffect} from 'react'

import './App.css';
import AddItem from './components/AddItem';
import Grocery from './components/Grocery';
import Header from './components/Header'

function App() {
  const [setSave, updateSave] = useState(false)
  useEffect(()=> console.log("Saved"),[setSave])
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
function onEditItem(e,id){
  e.target.innerText = setSave?"Edit":"Save"
  e.target.parentNode.parentNode.children[1].contentEditable = setSave?false:true
  e.target.parentNode.parentNode.children[2].contentEditable = setSave?false:true
  e.target.parentNode.parentNode.children[3].contentEditable = setSave?false:true
 if(setSave){
   console.log("can Save")
   console.log(e.target)
   const itemName = e.target.parentNode.parentNode.children[1].innerText
   const itemqty = +e.target.parentNode.parentNode.children[2].innerText
   const itemPrice = +e.target.parentNode.parentNode.children[3].innerText
 
   setGrocery(grocery=> grocery.map(item=>{
    if(item.id === id){
      item.item = itemName
      item.price = itemqty
      item.units = itemPrice
  }
  return item
   }))
   updateSave(setSave=> !setSave)
  //  e.target.innerText ="Edit"
  }
 else{ 
   updateSave(setSave=> !setSave)
  }
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
    </div>
  );
}

export default App;
