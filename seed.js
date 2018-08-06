const { plantdb, Gardener, Plot, Vegetable} = require('./model')


plantdb.sync({force:true})
.then( () => {
    console.log('database is synced');
})
.catch(err => {
    console.log('error: ' + err)
})
.finally(() => {
    plantdb.close()
})


