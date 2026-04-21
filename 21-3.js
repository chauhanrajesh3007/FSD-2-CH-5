/*Write express js script to perform tasks as asked below. 
1. Create one HTML file which contains two number type input 
fields, one dropdown which contains options to select like (addition, 
subtraction, multiplication, division) and one submit button. 
2. The input fields must contain the value greater than 0 else it will 
give a message “Please enter the valid number”. Also, user must 
select any type of formula from the dropdown else give a message 
“You have not selected any formula”. (Message will be displayed on 
“/calc” page.) 
3. If one formula is selected and numbers are entered then Both 
numbers should be stored in cookies which expires in 50 seconds. 
Respective calculations will be performed on the page “/calc”.*/
var expr=require("express")
var app=expr()
app.use(expr.static("../public",{index:"21-3.html"}))
app.get("/calc",(req,res)=>{
    n1=parseInt(req.query.n1)
    n2=parseInt(req.query.n2)
    if((n1>0)&&(n2>0)){
        if(req.query.formula=="add"){
            a=n1+n2
            res.write("Addition="+a)
        }
        else if(req.query.formula=="sub"){
            b=n1-n2
            res.write("subtraction="+b)
        }
        else if(req.query.formula=="div"){
            c=n1/n2
            res.write("division="+c)
        }
        else if(req.query.formula=="mul"){
            d=n1*n2
            res.write("multiplication="+d)
        }
        else{
            res.write("Please select any formula")
        }}
        else{
            res.write("Please enter valid number")
           
        }
        res.send()
    })
app.listen(9030)