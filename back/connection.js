const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:asdF0987@localhost:5432/sps');

async function connect() {
    try {
        console.log('DataBase connection has been established successfully');
        await sequelize.authenticate()
    } 
    catch (error) {
        console.log(`error: ${error}`);
    }
}
connect();

module.exports = { sequelize }