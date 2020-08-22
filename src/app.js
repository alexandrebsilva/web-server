const express = require('express')
const app = express()

app.get('',(req, res)=>{
    return res.send('Hello express!')
})

app.get('/help',(req, res)=>{
    return res.send('Help page!')
})

app.get('/about',(req, res)=>{
    return res.send('About page!')
})

app.get('/weather',(req, res)=>{
    return res.send('Weather page!')
})

app.listen(3000, ()=>{console.log('Server running on port 3000')})