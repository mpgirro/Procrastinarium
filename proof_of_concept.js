
var enabled=true
document.onmousedown=function(event) {
	if(enabled) {
		alert(event.button)
	}
}
document.onkeypress=function(event) {
	if(event.keyCode==27):
		enabled=false
}
