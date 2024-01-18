const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Netflix_Userbase',
  password: 'password',
  port: 5432,
});

app.use(cors()); // Habilitar CORS

const corsOptions = {
  origin: 'http://localhost:3000',  // Reemplaza con el origen de tu aplicación React
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.get('/users-by-year', async (req, res) => {
  try {
    const result = await pool.query('SELECT EXTRACT(YEAR FROM "Join Date") AS year, COUNT(*) AS user_count FROM netflix_data GROUP BY year');
    console.log(result.rows);  // Agrega este log
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/tablet-users-by-country', async (req, res) => {
  try {
    const result = await pool.query('SELECT "Country", COUNT(*) AS user_count FROM netflix_data WHERE "Device" = \'Tablet\' GROUP BY "Country"');
    console.log(result.rows);  // Agrega este log
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/payments-in-us', async (req, res) => {
  try {
    const result = await pool.query('SELECT COUNT(*) AS payment_count FROM netflix_data WHERE "Country" = \'United States\'');
    console.log(result.rows);  // Agrega este log
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});


