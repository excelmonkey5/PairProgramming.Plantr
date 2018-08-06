const Sequelize = require('sequelize');

const plantdb = new Sequelize('postgres://localhost:5432/plantr')




module.exports = {
    plantdb
}