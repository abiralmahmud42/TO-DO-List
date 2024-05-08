import express from 'express';

const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Your server is successfully running on ${PORT}`));
