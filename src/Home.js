import React from "react"; 
import Shop from "./Shop"; 
import "./App.css"
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className="title">
            <h1>Welcome!</h1>
            <Link to="/shop">
                <button button>Pick your Snack!</button>
            </Link>
            <img
                src="https://9y4oemohtq1ylsta112mibi5-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/VendingMachine-1200x675.jpg"
                alt="Vending machine"
            />
        </div>
    )
}

export default Home; 