var mongoose=require('mongoose');
var empSchema=mongoose.Schema({
    name:String,
    location:String,
    position:String,
    salary:Number
})
var empModel=mongoose.model("emp",empSchema);
module.exports=empModel