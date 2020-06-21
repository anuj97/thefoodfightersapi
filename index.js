const express = require('express')
const app = express()
const port = 4000

express.static('/')

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World! Get.'))

app.post('/', (req, res) => res.send('Hello World! Post.'))

app.put('/', (req, res) => res.send('Hello World! Put.'))

app.delete('/', (req, res) => res.send('Hello World! Delete.'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))