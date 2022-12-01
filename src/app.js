const express = require ('express')

const app = express()

app.get('/saludo/:nombre', (request, response) => {
    console.log(request,params)
    const nombre = request.params.nombre

    response.send('Saludos')
})

app.get('/saludo/:nombre/:apellido', (req, request) => {
    console.log(request,params)
    const nombre = request.params.nombre

    response.send('Saludos')
})



app.listen(8080, () => console.log('El servidor está corriendo'))