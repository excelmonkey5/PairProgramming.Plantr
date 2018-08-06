const { plantdb } = require('./model')


plantdb.sync({force:true})
.then( () => {
    console.log('database is synced');
})
.catch(err => {
    console.log('error: ' + err)
})
.finally(() => {
    db.close()
})


