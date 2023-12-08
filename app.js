const express = require('express')
const app = express()
const PORT = 3500

app.get('/api/v1', (request, response) => {
    response.status(200).json({message : "Slack Clone 2.0"})
})

app.listen(PORT, console.log(`Server is running at http://localhost:3500/api/v1`))