const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 2000;
const express = require('express');
const app = express ();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=> {
    res.status(200).send('<h1>Welcome to API</h1>')
});

//routing

const usersRouter = require ('./src/routers/usersRouter');

app.use('/users', usersRouter);

//error handling
app.use((err,req,res,next)=>{
    if(err){
        return res.status(200).send(err);
    }
})

app.listen(PORT, ()=> console.log(`Running API ${PORT}`));
