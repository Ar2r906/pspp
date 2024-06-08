const { sequelize } = require('../connection')
const { DataTypes } = require('sequelize')

const auth = sequelize.define(
    'auth',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        uid: {
            type: DataTypes.UUID,
        },
        AccessToken: {
            type: DataTypes.TEXT,
        },
        RefreshToken: {
            type: DataTypes.TEXT,
        },
        password: {
            type: DataTypes.TEXT,
        },
        email: {
            type: DataTypes.TEXT,
        },
        role: {
            type: DataTypes.TEXT,
        },
        name: {
            type: DataTypes.TEXT
        },
    },
    {
        tableName: 'auths',
        timestamps: true,
    }
)

async function get_auth_table() {
    await auth.sync()
    console.log('Auth table has been created successfully');
}

module.exports = { auth, get_auth_table }