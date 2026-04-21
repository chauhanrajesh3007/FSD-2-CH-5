/*Write express js script to print massage in next line spliting by . and use get method tp submit the data html file
contains form of text area and submit GamepadButton.*/
var expr=require("express")
var app=expr()
app.use(expr.static("../public",{index:"21-2.html"}))
app.get("/process.get",(req,res)=>{
    msg=req.query.Massage
    msg=msg.split(".")
    for (i in msg){
        res.write(msg[i]+"\n")
    }
res.send()
})
app.listen(9090)