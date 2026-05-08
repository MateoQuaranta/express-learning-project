const express = require('express');
const app = express();

const port = 3000;

// Motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))

//Rutas Web
app.use('/', require('./router/RutasWeb'))
app.use('/mascotas', require('./router/Mascotas'))

app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: "Pagina no encontrada 404",
        descripcion: "Te recomiendo volver a escribir la url"
    })
})

app.listen(port, () => {
    console.log('Servidor escuchando')
})