window.focus();
var enabled=true;
var m_down_element=null;
var m_down_el_pos=null;
var last_x=0;
var last_y=0;
document.onmousedown=function(event) {		//MOUSE DOWN
	if(enabled){
		event=event || window.event;
		if(event.button==0){
			m_down=true;
			m_down_element=event.target;
			m_down_el_pos=getPosition(m_down_element);
			last_x=event.clientX;
			last_y=event.clientY;
		}
		window.focus();			//by calling the alert function, the current window looses focus and no more keydown events would be possible
	}			
};

document.onmouseup=function(event) {		//MOUSE UP
	vent=event || window.event;
	if(event.button==0){
		m_down=false;
		m_down_element=null;
		m_down_el_pos=null
	}
};

document.onmousemove=function(event) {		//MOUSE MOVE
	if(enabled && m_down_element){
		event=event || window.event;
		var mX=event.clientX;
		var mY=event.clientY;
		alert(m_down_el_pos.x + " " + m_down_el_pos.y);
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
	var elem=element,tagname="",x=0,y=0;
  
	while ((typeof(elem)=="object")&&(typeof(elem.tagName)!="undefined")) {
    		y+=elem.offsetTop;    
    		x+=elem.offsetLeft;    
    		tagname=elem.tagName.toUpperCase();

    		if (tagname=="BODY")
      			elem=0;

    		if (typeof(elem)=="object")
      			if (typeof(elem.offsetParent)=="object")
       				elem=elem.offsetParent;
	}

	position=new Object();
  	position.x=x;
  	position.y=y;
  	return position;
}
