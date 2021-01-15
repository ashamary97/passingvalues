var Express=require("express")
var app=Express()


app.get('/',(req,res)=>{
    var getname=req.query.name;
    var getroll=req.query.roll
res.send("Hello  "  +getname+ " roll number "+getroll+ "")

})



app.listen(3000, (error)=>{
    if(error){
        console.log("Error")

    }
    else{
        console.log("Server running")
    }
})