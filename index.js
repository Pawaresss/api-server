const express = require('express')


const app = express();

app.get('/',(req,res)=>{
    res.send('Hello bew');
});

app.get('/users',(req,res)=>{
    res.send('show all user');
});

app.listen(3001,() =>
console.log('server started'),
);