const express = require('express');
const cors = require('cors');


const initializeDatabase = require('./myDB');
const setupRoutes = require('./route');


const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: 'http://localhost:8080' 
}));

const db = initializeDatabase();
setupRoutes(app, db);

app.listen(PORT, () => {
  console.log(`Le serveur tourne très bien sur le port N°${PORT}`);
});
