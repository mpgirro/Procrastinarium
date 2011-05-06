
var enabled=true
document.onmousedown=function(event) {
	if(enabled){
		if(event.button==0){
			alert(enabled)
		}
	}
}
document.onkeypress=function(event) {
	enabled=false
}
