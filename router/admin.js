// Aqui vai estar todas as rotas de admin.

const express = require('express');
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Admin')
})

router.get('/post', (req, res) => {
    res.send('Post')
})

router.get('/categorias', (req, res) => {
    res.send('Categorias')
})

module.exports = router;