const express = require('express');
const app = express();
const routes = require('./route.js');
 
app.use(express.json());
 
app.use('/', routes);
 

app.listen(4000, () =>{
    console.log("Server is running......")
})