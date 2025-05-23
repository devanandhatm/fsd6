// Task1: initiate app and run server at 3000
var express=require('express');
var app=express();
var port=3000;
const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 
require('./db')
var emp=require('./model/emp')
app.use(express.json())

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'
app.get('/api/employeelist',async(req,res)=>{
    try{
        var data = await emp.find();
        res.send(data)
    }catch (error) {
        res.send(error)
    }
})



//TODO: get single data from db  using api '/api/employeelist/:id'

app.get('/api/employeelist/:id',async(req,res)=>{
    try{
        var data = await emp.findById(req.params.id);
        res.send(data)
    }catch (error) {
        res.send(error)
    }
})



//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.post('/api/employeelist',(req,res)=>{
    try {
        console.log(req.body)
        emp(req.body).save();
        res.send("data added to db")
    } catch (error) {
        res.send(error)
        
    }
})




//TODO: delete a employee data from db by using api '/api/employeelist/:id'

app.delete('/api/employeelist/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
      await emp.findByIdAndDelete(req.params.id);
        res.send("data deleted")
    } catch (error) {
        res.send(error)
        
    }
})



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put('/api/employeelist',async(req,res)=>{
    try {
        console.log(req.params.id)
      await emp.findOneAndUpdate({_id:req.body._id},req.body,{new:true});
        res.send("data editted")
    } catch (error) {
        res.send(error)
    }
})


//! dont delete this code. it connects the front end file.
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});

app.listen(port,()=>{
    console.log(`server is up and running ${port}`)
})

