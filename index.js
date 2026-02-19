import express from 'express'

const app = express();

// function ageCheck(req,resp,next){

//     if(!req.query.age || req.query.age<18)
//     {
//         resp.send("Alert! you are not eleigible to access this page")
//     }else{
//         next()
//     }

// }

// app.use(ageCheck)

function ipCheck(req,resp,next){

    const ip = req.socket.remoteAddress
    if(ip.includes('10.165.142.44')){
         resp.send("Alert! You can not access this page")
    }else{
        next()
    }
    
}

 app.use(ipCheck)

app.get("/",(req,resp)=>{
    resp.send("<h1>This is home page</h1>")
})

app.get("/login",(req,resp)=>{
    resp.send("<h1>This is login page</h1>")
})

app.get("/admin",(req,resp)=>{
    resp.send("<h1>This is admin page</h1>")
})


app.listen(3200)