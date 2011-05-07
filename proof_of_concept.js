
var enabled=true
document.onmousedown=function(event) {
	var e=window.event || event;
	if(enabled){
		if(e.button==0){
			alert("yay");
			alert(e.clientX + " " + e.clientY);
		}
	}
}
document.onkeydown=function(event) {
	alert("keypress");
	var e=window.event || event;
	alert("after")
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
