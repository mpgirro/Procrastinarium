window.focus();
var enabled=true;
var moveElement=null;
var last_x=0;
var last_y=0;
var noClick=["BODY","HTML"];
var moveAsOne=["FORM","P"];
document.onmousedown=function(event) {		//MOUSE DOWN
	if(enabled){
		event=event || window.event;
		if(event.button==0 && checkElement(event.target)){
			m_down=true;
			moveElement=getElementToMove(event.target);
			last_x=event.clientX;
			last_y=event.clientY;
			position=getPosition(moveElement);
			if (moveElement.parentNode){
				moveElement.parentNode.removeChild(moveElement);
				document.body.appendChild(moveElement);
			}
			moveElement.style.position="absolute";
			moveElement.style.left=position[0]+"px";
			moveElement.style.top=position[1]+"px";
			
		}
		window.focus();			//by calling the alert function, the current window looses focus and no more keydown events would be possible
	}			
};

document.onmouseup=function(event) {		//MOUSE UP
	vent=event || window.event;
	if(event.button==0){
		m_down=false;
		moveElement=null;
	}
};

document.onmousemove=function(event) {		//MOUSE MOVE
	if(enabled && moveElement){
		event=event || window.event;
		var mX=event.clientX;
		var mY=event.clientY;
		moveElement.style.left=(parseInt(moveElement.style.left)+(mX-last_x))+"px";
		moveElement.style.top=(parseInt(moveElement.style.top)+(mY-last_y))+"px";
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
	for(var i=0;i<noClick.length;i++){
		if (element.tagName.toUpperCase() == noClick[i]) {
			return false;
		}
	}
	return true;

}

function getElementToMove(element){
	var el=element;
	do{
		if(el.tagName){
			for(var i=0;i<moveAsOne.length;i++){
				if (el.tagName.toUpperCase() == moveAsOne[i]) {
					return el;
				}
			}
		}
		el=el.parentNode;
	}while(el);
	return element;
}
