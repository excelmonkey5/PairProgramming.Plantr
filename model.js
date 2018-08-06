const Sequelize = require('sequelize');

const plantdb = new Sequelize('postgres://localhost:5432/plantr')


const Gardener = plantdb.define(gardener,{
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
})

const Plot = plantdb.define(plot, {
   size: Sequelize.STRING,
   shaded: Sequelize.BOOLEAN
})

const Vegetable = plantdb.define(vegetable, {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE
})


module.exports = {
    plantdb
}
console.log(Gardener);
