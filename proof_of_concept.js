
var enabled=true
document.onmousedown=function(event) {
	if(enabled){
		if(event.button==0){
			alert(event.target.type)
		}
	}
}
document.onkeydown=function(event) {
	alert("keypress")
	if(event.keyCode==27){
		alert("escape")
		if(enabled){	
			enabled=false
		}else{
			enabled=true
		}
	}
}
