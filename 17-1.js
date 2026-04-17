/*Unit-5 Link HTML,CSS,JS
#Syntax
-->app.use(route,middlewave) --> bind middlewave
-->express.static(path)--> serves static files from given path
-->path.join(path1,path2)--> join paths & create new path
-->__dirname -->environment variable that provides absolute path of current file
*/
var expr=require("express")
var app=expr()
app.use(expr.static(__dirname))
app.listen(8091)