const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:8080'],

}))

app.listen(port, () => {
    try {
        console.log(`Server started on port ${port}`);
    } catch (error) {
        console.log(error);
    }
})

app.use((error, req, res, next) => {
    if(error instanceof SyntaxError)
        res.status(400).send({ message: 'Invalid data'})
    else 
        next(error);
})