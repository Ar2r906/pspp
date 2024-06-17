const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT;
const auths_routes = require('./routes/routes_auths');
const users_routes  = require('./routes/routes_users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:8080']
}))

app.use('/api/auths', auths_routes);
app.use('/api/users', users_routes);

app.use((error, req, res, next) => {
    if (error instanceof SyntaxError)
        res.status(400).send({ message: 'Invalid data'})
    else 
        next();
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});