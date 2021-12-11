import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import crypto from 'crypto';

function App() {

  const [Order_slip_ID, setOrderID] = useState('');
  const [size, setSize] = useState('');
  const [Drink_ID, setDrinkID] = useState('');
  const [Txn_hash, setTxnhash] = useState('');

  const submitReview = () => {
    let order_id = (Math.random()).toString();
    let drink_id = (Math.random()).toString();
    setOrderID(order_id);
    setDrinkID(drink_id);
    let r = (Math.random() + 1).toString(36).substring(7);
    let txn = crypto.createHash('sha1').update(r).digest('hex');
    setTxnhash(txn)

    Axios.post('http:localhost:3001/api/insert', {
      size: size, Drink_ID: Drink_ID, Txn_hash: Txn_hash, Order_slip_ID: Order_slip_ID
    }).then(() => {
      alert("successful insert")
    })
  }

  return (
    <div className="App">
      <h1>Ice Cream Shop</h1>

      <div className="form">
        <label for="size">Choose a size:</label>
          <select name="size" id="size" onchange={(e) => {
            setSize(e.target.value);
          }}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

        <label for="flavor">Choose a flavor:</label>
        <select name="flavor" id="flavor" onchange={(e) => {
            setDrinkID(e.target.value);
          }}>
            <option value="volvo">Chocolate</option>
            <option value="saab">Vanilla</option>
            <option value="mercedes">Strawberry</option>
          </select>
        
        <button onClick={submitReview}>Submit</button>
      </div>

    </div>
  );
}

export default App;
