// global middleware

// import express from 'express'

// const app = express();

// // function ageCheck(req,resp,next){

// //     if(!req.query.age || req.query.age<18)
// //     {
// //         resp.send("Alert! you are not eleigible to access this page")
// //     }else{
// //         next()
// //     }

// // }

// // app.use(ageCheck)

// function ipCheck(req,resp,next){

//     const ip = req.socket.remoteAddress
//     if(ip.includes('10.165.142.44')){
//          resp.send("Alert! You can not access this page")
//     }else{
//         next()
//     }
    
// }

//  app.use(ipCheck)

// app.get("/",(req,resp)=>{
//     resp.send("<h1>This is home page</h1>")
// })

// app.get("/login",(req,resp)=>{
//     resp.send("<h1>This is login page</h1>")
// })

// app.get("/admin",(req,resp)=>{
//     resp.send("<h1>This is admin page</h1>")
// })


// app.listen(3200)



// route middleware

import express from 'express'

const app = express()


function checkAgeMiddleware(req,resp,next){
    if(!req.query.age || req.query.age<18)
    {
      resp.send("Your not eligible")
      return
    }

    next()
}

function checkURLMiddleware(req,resp,next){
    console.log("this is",req.url)

    next()
}

app.get('',(req,resp)=>{
    resp.send("<h1>Home Page</h1>")
})

app.get('/login',checkURLMiddleware,(req,resp)=>{
    resp.send("<h1>Login Page</h1>")
})

app.get('/users',checkAgeMiddleware,checkURLMiddleware,(req,resp)=>{
    resp.send("<h1>User Page</h1>")
})


app.get('/product',checkAgeMiddleware,(req,resp)=>{
    resp.send("<h1>Product Page</h1>")
})



app.listen(3200)