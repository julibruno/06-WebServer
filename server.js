const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers')

//Esto es el puerto para heroku, si no lo encuentra le pone 3000
//Siempre que lo corra local no lo va a encontrar por eso el 3000
const port = process.env.PORT  || 3000;



app.use(express.static(__dirname + '/public'))


hbs.registerPartials(__dirname + '/views/parciales');
//EXPRESS HBS (REQUIERE INSTALACION)
app.set('view engine', 'hbs');



app.get('/',  (req, res) => {
    // let salida ={
    //     nombre:'Julian',
    //     edad: 26,
    //     url: req.url
    // }
    res.render('home.hbs',{
        nombre: 'Julian'
        
    })
    
})

app.get('/about',  (req, res) => {

    res.render('about.hbs')
})
//

app.listen(port, () =>{
    console.log(`Escuchando el puerto ${port}`) 
})