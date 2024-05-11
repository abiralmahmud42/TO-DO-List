import express from 'express';
import connectToDatabase from './database/db.js';
const app = express();

const PORT = 8000;

connectToDatabase();

app.listen(PORT, () => console.log(`Your server is successfully running on ${PORT}`));
