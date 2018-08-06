const Sequelize = require('sequelize');

const plantdb = new Sequelize('postgres://localhost:5432/plantr')


const Gardener = plantdb.define('gardener', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
});

const Plot = plantdb.define('plot', {
   size: Sequelize.STRING,
   shaded: Sequelize.BOOLEAN
});

const Vegetable = plantdb.define('vegetable', {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE
});

const tomatoe = Vegetable.create({name: 'Tomatoe', color: 'red', planted_on:new Date("October 13, 2014 11:13:00")}).then( () => {
    console.log('tomatoe is added');
})
.catch( err => {
    console.Error(err);
})

Plot.belongsTo(Gardener)
Gardener.hasOne(Plot)

Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})


module.exports = {
    plantdb, Gardener, Plot, Vegetable, tomatoe
}
// console.log(Gardener);
