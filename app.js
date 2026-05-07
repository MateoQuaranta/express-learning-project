const express = require('express');
const app = express();

const port = 3000;

// moto de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))


app.get('/', (req, res) => {
    res.render('index', {titulo: 'Mi titulo dinamico'})
})

app.get('/servicios', (req, res) => {
    res.render('servicios', {tituloServicios: 'Esta es la pagina de servicios'})
})

app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: "Pagina no encontrada 404",
        descripcion: "Te recomiendo volver a escribir la url"
    })
})

app.listen(port, () => {
    console.log('Servidor escuchando')
})