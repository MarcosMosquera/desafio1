const express = require ('express')

const users = [
    {id: "1", nombre: "gonzalo", apellido: "Coradello"},
    {id: "2", nombre: "gonzalo", apellido: "Coradello"},
    {id: "3", nombre: "gonzalo", apellido: "Coradello"}
]

app.get('/', (req, res) => res.send({users}))
app.get ('/:iduser', (req, res) => {
    const idUser = req.params.idUser

    const user = users.find (u => u.id == idUser)

    if(!user) res.send({error: "User not found"}) 
    else res.send({user})
})


app.listen(8080, () => console.log('El servidor está corriendo'))