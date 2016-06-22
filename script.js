var l = false;
var r = false;
var lid;
var rid;
function rightToleft(){
	r = true;
	var right = document.getElementById("right").value;
	var left = document.getElementById("left").value;
	left = left + right.charAt(0);
	right = right.slice(1, right.length);
	document.getElementById("left").value = left;
	document.getElementById("right").value = right;
	rid = setTimeout(rightToleft,500);
	if(right.length == 0) {Pause();};
}
function leftToright(){
	l = true;
	var right = document.getElementById("right").value;
	var left = document.getElementById("left").value;
	right = right + left.charAt(0);
	left = left.slice(1, left.length);
	document.getElementById("right").value = right;
	document.getElementById("left").value = left;
	lid = setTimeout(leftToright,500);
	if(left.length == 0) {Pause();};
	return;
}
function Clear(){
	document.getElementById("left").value = "";
	document.getElementById("right").value = "";
}
function Pause(){
     if(r){
     	clearTimeout(rid);
     	alert("Right to Left Pause");
     	r = false;
     }else if(l){
     	clearTimeout(lid);
     	alert("Left to Right Pause");
     	l = false;
    }else{
     	alert("Temp Pause");
     }
}