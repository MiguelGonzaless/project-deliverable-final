import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';
import crypto from 'crypto';

function App() {

  const [Order_slip_ID, setOrderID] = useState('');
  const [Size, setSize] = useState('');
  const [Drink_ID, setDrinkID] = useState('');
  const [Txn_hash, setTxnhash] = useState('');
  const [Base_recipe, setBaseIngredient] = useState('');

  const submitReview = () => {
    let order_id = (Math.floor(Math.random() * 10 * (100)));
    let drink_id = (Math.floor(Math.random() * 10 * (100))); //removed .toString
    setOrderID(order_id);
    setDrinkID(drink_id);
    let r = (Math.random() + 1).toString(36).substring(7);
    let txn = crypto.createHash('sha1').update(r).digest('hex');
    setTxnhash(txn);

    setBaseIngredient(parseInt(Base_recipe))

    console.log(Order_slip_ID, Drink_ID, Txn_hash);
    console.log(Drink_ID, Base_recipe, Size);

    Axios.post('http://localhost:3001/api/insert', {
      Size: Size, Drink_ID: Drink_ID, Txn_hash: Txn_hash, Order_slip_ID: Order_slip_ID, Base_recipe: Base_recipe
    }).then(() => {
      alert("successful insert")
    })
  }

  return (
    <div className="App">
      <h1>Ice Cream Shop</h1>
      <button id="create_order" className="button" onClick={modal_display}>Create Order</button>

      <div id="myModal" className="modal">
        <div className="modal-content">
        <span className="close" onClick={span_display}>&times;</span>
          <div className="form">
            <div className='choices'>
              <label htmlFor="size">Choose a size:</label>
                <select name="size" id="size" onChange={(e) => {
                  setSize(e.target.value);
                }}>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                </select>
            </div>
            
            <div className='choices'>
              <label htmlFor="flavor">Choose a flavor:</label>
              <select name="flavor" id="flavor" onChange={(e) => {
                  setBaseIngredient(e.target.value);
                }}>
                  <option value="00">Soy Vanilla</option>
                  <option value="01">Cookies N Cream</option>
                  <option value="02">Strawberry</option>
                </select>
            </div>
        
            <button onClick={submitReview}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function modal_display () {
  if (document.getElementById("myModal")){
    var modal = document.getElementById("myModal")
    modal.style.display = "block";
  };
}

function span_display() {
  if (document.getElementById("myModal")){
    var modal = document.getElementById("myModal")
    modal.style.display = "none";
  };
}

window.onclick = function(event) {
  if (document.getElementById("myModal")){
    var modal = document.getElementById("myModal")
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}

export default App;
