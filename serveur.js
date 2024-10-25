const express = require ("express");
const path = require ('path');

const app = express;

app.request(express.static(__dirname + '/dist/jo-2024'));

app.get ('/*', function (req,res){
  res.sendFile(path.join(__dirname + 'dist/jo-2024/index.html'));
})

app.listen(process.env.PORT);
