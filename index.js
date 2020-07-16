const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app.use(cors())
 
// var corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200
// }

// app.options('/images/', function (req, res, next) {
//     console.log('Pre-Flight Test')
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept, X-Requested-With, Access-Control-Allow-Origin");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.status(200);
//     res.end()
// })


express.static('/')
app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World! Get.'))

// app.options('/images/', cors())

app.get('/images', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With, Access-Control-Allow-Origin')
    res.set('Access-Control-Expose-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With, Access-Control-Allow-Origin')
    res.send([
        'http://localhost:4000/images/elaicheesecake.png',
        'http://localhost:4000/images/uthappizza.png',
        'http://localhost:4000/images/vadonut.png'
    ]
)})

app.post('/', (req, res) => res.send('Hello World! Post.'))

app.put('/', (req, res) => res.send('Hello World! Put.'))

app.delete('/', (req, res) => res.send('Hello World! Delete.'))

app.use((req, res, next) => res.status(404).send("Sorry can't find that!"))

app.use( (err, req, res, next) => {
    // console.log(err)

    res.status(500).send('Something broke!')
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))