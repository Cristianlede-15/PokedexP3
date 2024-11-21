const express = require('express');
const path = require('path');
const app = express();
const Connection = require('./Contexts/AppDbContext');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

app.use(express.static(path.join(__dirname, 'Public')));

app.use('/', require('./Routes/Home'));
app.use('/pokemones', require('./Routes/Pokemones'));
app.use('/regiones', require('./Routes/Regiones'));
app.use('/tipos', require('./Routes/Tipos'));

const Pokemon = require('./Models/Pokemon');
const Tipo = require('./Models/Tipo');
const Region = require('./Models/Region');

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});