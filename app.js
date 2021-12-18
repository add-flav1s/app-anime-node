//Carregando os modulos do app

const express = require('express');
const {
    engine
} = require('express-handlebars');
const app = express();
const path = require('path');
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

// ----public configure ---- //
app.use(express.static(path.join(__dirname, 'public'))); //pasta que está guardando todos os arquivos estaticos.

// Rotas
app.use('/admin', admin);




const port = 8082;
app.listen(port, () => {
    console.log(`listening on port localhost:${port}`);
});