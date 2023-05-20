const express = require('express');
const cors = require("cors");
const { connection } = require('./database/dbConnect')

//dotenv
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

//* Para parsear // traducir
app.use(express.json());

//* Para parsear req con urlencoded payload
app.use(express.urlencoded({ extended: false }));

//* CONEXION A BBDD
connection()

//* RUTAS

app.use('/api/v1/auth', require('./routers/authRouters'));
app.use('/api/v1/entries', require('./routers/entriesRouters'));

//* Listener
app.listen(port, () => {
    console.log(`connected from port ${port}`)
})