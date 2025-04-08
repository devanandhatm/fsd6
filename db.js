var mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Devanandha:devanandha@cluster0.4n89rjb.mongodb.net/db6?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{console.log(err)})