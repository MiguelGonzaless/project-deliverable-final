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
    const Drink_ID = req.body.Drink_ID;
    const Txn_hash = req.body.Txn_hash;

    const sqlInsert = 
        "INSERT INTO ORDER_SLIP (Order_slip_ID, Size, Drink_ID, Txn_hash) VALUES (?,?,?,?)"
    db.query(sqlInsert, [Order_slip_ID, Size, Drink_ID, Txn_hash], (err, result) => {

    });
});

app.listen(3001, () => {
    console.log('running on port 3000')
});