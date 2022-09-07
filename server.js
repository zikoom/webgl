const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, () =>{
  console.log('server on 3000');
});