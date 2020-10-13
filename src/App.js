import React from 'react';
import Home from "./Home"; 
import Shop from "./Shop"; 
import { BrowserRouter, Route } from "react-router-dom"; 


function App(props) {
  console.log(props.chips)
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Shop">
          {/* <Shop items={props.chips, props.sodas, props.candy}/> */}
          <Shop items={props.chips}/>
          <Shop items={props.sodas}/>
          <Shop items={props.candy}/>
          {/* <Shop items={props}/> */}
        </Route>
      </BrowserRouter>
    </div>
      
  );
}

App.defaultProps = {

  chips : [
    {
      name : "Hot Cheetos" ,
      price: "$2.00", 
      image: "https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0c4066ca-ec20-4039-a11c-37957644cbaa.jpeg"
    }, 
    {  name : "Lays" ,
       price: "$2.00", 
       image: "https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f3b09765-dd02-4aab-89b2-5aeb9d3ff516.jpeg"
    }
  ], 
  sodas : [
    {
      name: "Coke",
      price: "$3.00", 
      image: "https://images.wbmason.com/350/L_CCC5222.jpg"
    }, 
    {
      name: "Sprite",
      price: "$3.00", 
      image: "https://i1.wp.com/karunfreshgrocery.com/wp-content/uploads/2018/11/SPRITE-LEMON-LIME-12-OZ.png?fit=600%2C600&ssl=1"
    }
  ], 
  candy : [
    {
      name: "Kit Kat",
     price: "$1.00", 
     image: "https://i2.wp.com/www.economycandy.com/wp-content/uploads/2019/07/products-Kit-Kat-Milk-Chocolate-1.jpg?fit=709%2C709&ssl=1"
    }, 
    {
     name: "Sour Patch Kids",
     price: "$1.00", 
     image: "https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f227781d-a84e-41fe-9f90-20e2acf00321.jpg"
    }
  ]
}


export default App;
