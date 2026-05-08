const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: '1', nombre: 'persia', descripcion: 'persia descripcion'},
            {id: '2', nombre: 'clio', descripcion: 'clio descripcion'},
        ]
    })
})

module.exports = router;