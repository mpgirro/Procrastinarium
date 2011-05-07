
var enabled=true
document.onmousedown=function(event) {
	if(enabled){
		if(event.button==0){
			alert(event.target.name)
		}
	}
}
document.onkeydown=function(event) {
	alert("keypress")
	//var k;
	//if(window.event){ //IE
	//	k=e.keyCode;
	//}
	//else if(e.which){ // Netscape/Firefox/Opera
	//	k=e.which;
	//}else{
	//	k=0
	//}
	//if(k==27){
	//	alert("escape")
	//	enabled = !enabled
	//}
}
