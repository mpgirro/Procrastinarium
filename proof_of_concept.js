
var enabled=true
document.onmousedown=function(event) {
	if(enabled){
		if(event.button==0){
			alert(event.SrcElement)
		}
	}
}
document.onkeypress=function(event) {
	alert("keypress")	
	enabled=false
}
