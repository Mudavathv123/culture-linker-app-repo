
const express = require('express');
const mysql = require('mysql2');
const app = express();


app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',     
    user: 'mudavath',          
    password: 'mudavath@143',  
    database: 'vinoddb' 
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

// API endpoint to calculate the total value of products
app.post('/calculate-total', (req, res) => {
    const products = req.body.products;

    if (!Array.isArray(products)) {
        return res.status(400).json({ error: 'Invalid input, expected an array of products' });
    }

    let totalAmout = 0;

    const sql = 'INSERT INTO products (name, price, quantity) VALUES ?';

    const values = products.map(product => [product.name, product.price, product.quantity]);

    db.query(sql, [values], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error inserting products into the database' });
        }

        products.forEach(product => {
            const { price, quantity } = product;
            totalAmout += price * quantity;
        });

        res.json({ totalAmout });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
