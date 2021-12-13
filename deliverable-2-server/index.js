const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyparser = require('body-parser');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'wayoftheMAN24',
    database: 'DB_Blizzard',
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));

app.post('/api/insert', (req,res) => {

    const Order_slip_ID = req.body.Order_slip_ID;
    const Size = req.body.Size;
    const Drink_ID = parseInt(req.body.Drink_ID);
    const Txn_hash = req.body.Txn_hash;
    const Base_recipe = req.body.Base_recipe

    const insert_Order = "INSERT INTO ORDER_SLIP (Order_slip_ID, Drink_ID, Txn_hash) VALUES (?,?,?)";
    db.query(insert_Order, [Order_slip_ID, Drink_ID, Txn_hash], (err, result) => {

    });
    const insert_Drink = "INSERT INTO DRINK (Drink_ID, Base_recipe, Size) VALUES (?,?,?)";
    db.query(insert_Drink, [Drink_ID, Base_recipe, Size], (err, result) => {

    });
});

app.listen(3001, () => {
    console.log('running on port 3000')
});