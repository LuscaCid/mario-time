const express = require('express')

const app = express()

const PORT = 3333

app.use(express.json())

app.listen(PORT, ()=>{`servidor ta rodando na porra da porta ${PORT} `})
app.get('/', (request, response)=>{
    response.send('../index.html')
})