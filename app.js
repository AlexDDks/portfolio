const express = require('express');
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');

const mainRouter = require('./routes/mainRouter')

app.use('/', mainRouter)

app.listen(3000, function(){
    console.log('Servidor funcionando en el puerto 3000');
});
