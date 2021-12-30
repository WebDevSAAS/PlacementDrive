const express =require('express');

// creating of express app
const app=express();

// port set-up
const port=process.env.PORT || 8000;

// root-route for server
app.get('/',(req,res)=>{
    res.send('hey server');
});

// port will listen

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});