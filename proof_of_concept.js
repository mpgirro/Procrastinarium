
window.focus()
var enabled=true
document.onmousedown=function(event) {
	event=event || window.event;
	if(enabled){
		if(event.button==0){
			alert(event.clientX + " " + event.clientY);
		}
	}
	window.focus()
};
document.onkeydown=function(event) {
	alert("keydown");
	event=event || window.event;
	var k;
	if(window.event){ //IE
		k=event.keyCode;
	}
	else if(event.which){ // Netscape/Firefox/Opera
		k=event.which;
	}else{
		k=0
	}
	if(k==27){
		enabled = !enabled
	}
	window.focus()
};
