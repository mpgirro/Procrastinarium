
var enabled=true
document.onmousedown=function(event) {
	if(enabled) {
		if(event.button==1)
			alert(event.type)
	}
}
document.onkeypress=function(event) {
	if(event.keyCode==27):
		enabled=false
}
