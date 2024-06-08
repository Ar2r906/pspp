const { Sequelize } = require('sequelize');
const config = require('./config/dbconfig');

const sequelize = new Sequelize(
    config.DB, config.USER, config.PASSWORD, 
    {
        host: config.HOST,
        dialect: config.dialect,
        port: config.PORT,
        opeartionsAliases: false,

        pool: {
            max: config.pool.max,
            min:  config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle,
        }
    }
);

async function connect() {
    try {
        await sequelize.authenticate()
        console.log('DataBase connection has been established successfully');
    } 
    catch (error) {
        console.log(`error: ${error}`);
    }
}
connect();

module.exports = { sequelize }