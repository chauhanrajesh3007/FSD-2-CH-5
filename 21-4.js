var expr=require("express")
var app=expr()
app.use(expr.urlencoded())
app.use(expr.static("../public",{index:"21-4.html"}))
app.post("/process_post",(req,res)=>{
    res.send("Welcome "+req.body.fname+" "+req.body.lname+"!!")
})
app.listen(9007)