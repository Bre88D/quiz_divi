const express = require("espress")


const app = express()
const port = 5000

app.get("/api",(req, res) => {

    return res.status(200).json({message: "bienvenido al api :)"})


}) 

app.Listen(port, () => console,log(`Escuchando el puerto ${port}`))

//DIVISION

app.get('/division/:num1/:num2', (req, res) => {

    let result = parseInt(req.params.num1) / parseInt(req.params.num2)

    console.log(req.params)
    parseInt(req.params.num2)
    return res.status(200).json({result: result})

})

app.get('division', (req, res) => {

    let result = parseInt(req.query.num1) / parseInt(req.query.num2)
    console.log(req.query)

    return res.status(200).json({result: result})
})