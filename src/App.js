import "./App.css";
import { useState, useEffect } from "react";
import BakeryItem from "./BakeryItem";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

const App = () => {
  const [ cart ] = useState(new Map());
  const [ total, setTotal ] = useState(0);
  const [ cartList, setCartList ] = useState([]);

  const createCartList = () => {
    const newCartList = [];
    cart.forEach((value, key) => {
      newCartList.push(`${value.count}x ${key}`);
    })
    console.log(newCartList);
    console.log(cart);
    setCartList(newCartList);
  }

  const addToCart = (item) => {
    if (!cart.has(item.name)) {
      cart.set(item.name, {count: 1, price: item.price});
    }
    else cart.set(item.name, {count: cart.get(item.name).count + 1, ...cart[item.name]});
    setTotal(Math.round((item.price + total)* 100) / 100);
    createCartList();
  }

  return (
    <div className="App">
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <h1>My Bakery</h1>
          <div style={{width: '800px', display: 'flex', flexWrap: 'wrap'}}>
            {bakeryData.map((item) => (
              <BakeryItem key={item.name} item={item} callback={() => {addToCart(item)}}/>
            ))}
          </div>
        </div>

        <div style={{width: '200px'}}>
          <h2>Cart</h2>
          <p>Total: ${total}</p> 
          {cartList.map((item) => (
            <p key={item}> {item} </p> 
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
