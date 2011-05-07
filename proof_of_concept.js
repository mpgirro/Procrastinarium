
var enabled=true
document.onmousedown=function(event) {
	var e=window.event || event;
	if(enabled){
		if(e.button==0){
			alert(e.clientX + " " + e.clientY);
		}
	}
}
window.onkeydown=function(event) {
	alert("keydown");
	var e=window.event || event;
	var k;
	if(window.event){ //IE
		k=e.keyCode;
	}
	else if(e.which){ // Netscape/Firefox/Opera
		k=e.which;
	}else{
		k=0
	}
	if(k==27){
		enabled = !enabled
	}
}
