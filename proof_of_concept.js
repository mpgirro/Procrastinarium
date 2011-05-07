window.focus()
var enabled=true
var m_down_element=null
var m_x=0
var m_y=0
document.onmousedown=function(event) {		//MOUSE DOWN
	if(enabled){
		event=event || window.event;
		if(event.button==0){
			m_down_element=event.target;
			m_x=event.clientX;
			m_y=event.clientY;
		}
		window.focus();			//by calling the alert function, the current window looses focus and no more keydown events would be possible
	}			
};

document.onmouseup=function(event) {		//MOUSE UP
	if(enabled){
		event=event || window.event;
		if(event.button==0){
			m_down_element=null;
		}
		window.focus();			//by calling the alert function, the current window looses focus and no more keydown events would be possible
	}	
};

document.onmousemove=function(event) {		//MOUSE MOVE
	if(enabled && m_down_element){
		event=event || window.event;
		var mX=event.clientX;
		var mY=event.clientY;
		alert((mX-m_x) + " " + (mY-m_y)); 
		m_x=mX;
		m_y=mY;
		window.focus();			//by calling the alert function, the current window looses focus and no more keydown events would be possible
	}	
};

document.onkeydown=function(event) {
	alert("keydown");
	event=event || window.event;
	var k;
	if(window.event){ 			//IE
		k=event.keyCode;
	}
	else if(event.which){ 			// Netscape/Firefox/Opera
		k=event.which;
	}else{
		k=0
	}
	if(k==27){
		enabled = !enabled
	}
	window.focus()				//by calling the alert function, the current window looses focus and no more keydown events would be possible
};
