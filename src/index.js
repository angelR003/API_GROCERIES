
import app from './app.js'
import database from './database.js'
const port = process.env.PORT
app.listen(process.env.PORT, ()=>{
    console.log('server on port '+ port)
});



































































































































/*const express= require('express');
const app = express();
app.use(express.json());
app.get('/home', (req, res) => {
    //aqui se procesa la peticion y se envia la respuesta
    res.json({
        "status": "peticion por get recibida..."

    })
});

app.get('/factorial/:numero', (req, res) => {
    let numero = req.params.numero;
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial = factorial * i;
    }
    res.json({
        "status": "peticion recibida preparando resultado...",
        "result": factorial
    });
});

app.post('/po', (req, res) => {
    res.json({
        "status": "peticion por post recibida..."
    });
});

app.put('/pu', (req, res) => {
    res.json({
        "status": "peticion por put recibida..."

    })
});

app.delete('/del', (req, res) => {
    res.json({
        "status": "peticion por delete recibida..."

    })
});


app.post("/insertproduct", (req, res) => {
    console.log(req.body);
    res.json({
        "status": "producto insertado",
    })
});

app.get("/getOne/:barcode", (req, res) => {
    console.log(req.params);
    res.json({
        "status": "peticion por get recibida...",
    });
    });
    



app.listen(3200, () => console.log('el servidor esta corriendo en el puerto 3200'));*/
