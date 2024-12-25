const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,  
    user: "root",
    password: "Ayush@123",
    database: "crud"
});

db.connect(function(err) {
    if (err) {
        console.log("error occurred while connecting");
    } else {
        console.log("connection created with mysql successfully");
    }
});


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(arr) return res.json("Login Failed");
        return res.json(data);
    })
})




app.listen(8081, () => {
    console.log("listening....");
})