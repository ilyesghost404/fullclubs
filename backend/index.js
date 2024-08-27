const express = require('express')
const app = express()

const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const path = require('path')
app.use(express.urlencoded({extended: true}));
//import module
const User = require("./models/schema")
app.use(express.static(path.join(__dirname,'frontend/public')));
//send project html and get data from data base
app.get('/', (req, res) => {
    res.sendFile((path.join(__dirname +"/frontend/public/index.html")));
  });
//apis call
fetch('/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

//connect to data base
mongoose
.connect(
    'mongodb+srv://hmidilyes4442:D9luKN1sK597e2uC@cluster0.7of6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
.then(()=> {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`)
      })
})
.catch((err)=> {console.log(err)});

//send data to data base
app.post('/', (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save().then(()=>{
        res.redirect("/")
    })
    .catch(()=>{
        console.log(err)
    });
    
  })