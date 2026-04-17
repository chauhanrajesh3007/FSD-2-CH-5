var expr=require("express")
var app=expr()
app.use(expr.static("../public",{index:"form.html"}))
app.get("/process.get",(req,res)=>{
    res.send("Welcome "+req.query.uname+" "+req.query.lname)
})
app.listen(9091)