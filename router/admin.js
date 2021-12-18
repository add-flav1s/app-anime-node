// Aqui vai estar todas as rotas de admin.

const express = require('express');
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Admin')
})

router.get('/animes', (req, res) => {
    res.send('Animes')
})

router.get('/categorias', (req, res) => {
    res.send('Categorias')
})

module.exports = router;