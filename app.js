//Carregando os modulos do app

const express = require('express');
const handlebars = require('express-handlebars');
const app = express();


//Configurando os modulos
// ----body-parser configure ---- //
app.use(bodyParser.urlenconded({
    extendend: true
}));
app.use(bodyParser.json());

// ----handlebars configure ---- //
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// ----mongoose configure ---- //




const port = 8082;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});