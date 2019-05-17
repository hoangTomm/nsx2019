const express = require('express')
const app = express()
const port = 5000

app.get('/api/getList', (req, res) => {
    res.json(['1','1', '2'])
})

app.get('/', (req, res)=> res.send('web'))

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`)
})