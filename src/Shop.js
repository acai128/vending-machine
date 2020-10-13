import React from "react"; 
import "./Shop.css"; 
import Item from "./Item"; 

function Shop(props){
    console.log('PROPS******', props)
    return (
        <div>
            {props.items.map(item => {
                return <Item 
                    image={item.image}
                    name={item.name}
                    price={item.price} />
            })}
        </div> 
    )
}


export default Shop; 

// <div className="items-container">
//                         {props.products.map(item => {
//                             return <Item 
//                                     product={item}
//                                     key={item.id} 
//                                     name={item.name}
//                                     price={item.price}
//                                     photo={item.photo}
//                                     updateProducts={props.updateProducts} />
//                         })} 

// <div>
//             {props.items.map(item => (
//                 <div>
//                     <img className="item-photo" src={item.image} />
//                     {item.name}
//                     {item.price}
//                     <button onClick={handleClick}>Add</button>
//                     {handleClick()}
//                 </div>
//             ))}
//         </div> 