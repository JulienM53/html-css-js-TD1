  
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

function lancer(){
	var orginalIP = document.getElementById('adresse_ip').value; 
	//console.log("<div class='resultat'>" + orginalIP + "</div>");
	//document.write(orginalIP);
	document.getElementById("resultat").innerHTML = orginalIP;

}	




