const { plantdb } = require('./model')


plantdb.sync({force:true})
.then( () => {
    console.log('database is synced');
})