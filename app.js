//Carregando os modulos do app

const express = require('express');
const {
    engine
} = require('express-handlebars');
const app = express();

const admin = require('./router/admin');


//Configurando os modulos
// ----express configure ---- //
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// ----handlebars configure ---- //
app.engine('handlebars', engine({
    defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

// ----mongoose configure ---- //

// Rotas
app.use('/admin', admin);




const port = 8082;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});