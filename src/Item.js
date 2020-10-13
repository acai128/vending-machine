import React, {useState} from "react"; 
import Shop from "./Shop"; 

function Item(props){
    const[count, setCount] = useState(0); 
    
    function addProduct(){
        return (
            setCount(count + 1)
        )
    }

    function removeProduct(){
        return (
            setCount(count - 1)
        )
    }
    return (
        <div>
            {/* <h1>This is the items</h1>  */}
            {props.name}
            {props.price}   
            <img className="item-photo" src={props.image} />
            {/* <button>Add</button> */}
            <div>
                Count: {count}
               <button onClick={addProduct}>ADD</button>
               <button onClick={removeProduct}>REMOVE</button>


            </div>
        </div>
    )
}


export default Item; 