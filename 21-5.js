/*write an express.js script to load an HTML file having username and 
password and submit button. On clicking submit button. It should 
jump on "check" page using "POST" method. If username is "admin" 
, then jump on next middleware to print "welcome… admin" , if 
username is not "admin" , then stay on same to print 
"warning msg" in red color.*/
var expr=require("express")
var app=expr()
app.use(expr.urlencoded())
app.use(expr.static("../public",{index:"21-5.html"}))
app.post("/check",(req,res)=>{
    if(req.body.uname=="admin"){
        res.send("Welcome admin")
    }
    else{
        res.send(`Please login with admin name <a href="/">try again</a>`)
    }
})
app.listen(8091)