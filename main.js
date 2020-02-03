  
/*
	Manipulation d'une adresse IP
*/

var part1=192;
var part2=168;
var part3=100;
var part4=25;


var orginalIP = part1+"."+part2+"."+part3+"."+part4;

part4=99;

var newlIP = part1+"."+part2+"."+part3+"."+part4;

document.getElementById("myP").innerHTML = newlIP;
document.getElementById("myDIV").innerHTML = "How are you?";


