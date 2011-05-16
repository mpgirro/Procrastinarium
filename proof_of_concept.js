window.focus();
var enabled=true;
var m_down_element=null;
var last_x=0;
var last_y=0;
document.onmousedown=function(event) {		//MOUSE DOWN
	if(enabled){
		event=event || window.event;
		alert("hello");
		alert(checkElement(event.target));
		alert("hello2");
		if(event.button==0 && checkElement(event.target)){
			m_down=true;
			m_down_element=event.target;
			last_x=event.clientX;
			last_y=event.clientY;
			position = getPosition(m_down_element);
			if (m_down_element.parentNode){
				m_down_element.parentNode.removeChild(m_down_element);
				document.body.appendChild(m_down_element);
			}
			m_down_element.style.position="absolute";
			m_down_element.style.left=position[0]+"px";
			m_down_element.style.top=position[1]+"px";
			
		}
		window.focus();			//by calling the alert function, the current window looses focus and no more keydown events would be possible
	}			
};

document.onmouseup=function(event) {		//MOUSE UP
	vent=event || window.event;
	if(event.button==0){
		m_down=false;
		m_down_element=null;
	}
};

document.onmousemove=function(event) {		//MOUSE MOVE
	if(enabled && m_down_element){
		event=event || window.event;
		var mX=event.clientX;
		var mY=event.clientY;
		m_down_element.style.left=(parseInt(m_down_element.style.left)+(mX-last_x))+"px";
		m_down_element.style.top=(parseInt(m_down_element.style.top)+(mY-last_y))+"px";
		last_x=mX;
		last_y=mY;
		window.focus();			//by calling the alert function, the current window looses focus and no more keydown events would be possible
	}	
};

document.onkeydown=function(event) {
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


function getPosition(element) {
	var x=0,y=0; 
	if (element.offsetParent){
		do {
    			y+=element.offsetTop;    
    			x+=element.offsetLeft;    
		} while(element=element.offsetParent);
	}
  	return [x,y];
}

function checkElement(element) {
	alert("helloFunc");
	if (element.name.toUpperCase() == "BODY") {
		return false;
	}
	return true;

}
