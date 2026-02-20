import express from 'express'
import morgan from 'morgan';
const app = express();

app.use(morgan('dev'))

app.get("/",(req,res)=>{
res.send("Home Page")
});

app.get("/users",(req,res)=>{
res.send("Users Page")
});

app.get("/wait",(req,res)=>{
  setTimeout(()=>{
    res.send("result after 1 sec")
  },1000)
});

app.listen(3200)