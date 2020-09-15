
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'basic_node_api_database',
    process.env.DB_USER,
    process.env.DB_PASS,
    {dialect: 'mysql', host: process.env.DB_HOST}
)

module.exports = sequelize
