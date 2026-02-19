import express from 'express'
import path from 'path'

const app = express()



app.use(express.urlencoded({extended:false}))// builtin middleware
app.use(express.static('public'))// builtin middleware

app.get('',(req,resp)=>{
    const absPath = path.resolve('view/home.html');
    resp.sendFile(absPath)
})


app.get('/login',(req,resp)=>{
    resp.send(`<form action="/submit" method="post">
        <input type="text" placeholder="username" name="username"/><br>
        <input type="text" placeholder="password" name="password"/><br>
        <button type="submit">Login</button>
        </form>`)
})

app.post('/submit',(req,resp)=>{
    

    console.log(req.body)
     resp.send(req.body)
})

app.get('/user',(req,resp)=>{
    resp.send("user Page")
})

app.listen(3200)