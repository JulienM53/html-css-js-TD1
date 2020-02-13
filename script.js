$( "#box-resultat" ).hide();
function calcIP() {

	var elem = document.getElementById('myIP').value;
	//console.log(elem);
	var ip = elem.split('.');
	//console.log(ip);
	var cidr = ip[3].split('/');

	ip[3]= cidr[0];
	var CIDR=cidr[1];
	console.log(ip);

	var IP = parseInt(ip[0]) << 24 |parseInt(ip[1]) << 16 |parseInt(ip[2]) << 8 |parseInt(ip[3]); 

	var mask = 0xFFFFFFFF << (32-CIDR);
	toString(mask);
	//document.getElementById("mask").innerHTML =toString(mask);
	document.getElementById("mask").setAttribute('value',toString(mask));

	var adrN = IP & mask
	toString(adrN);
	//document.getElementById("adrN").innerHTML =toString(adrN);
	document.getElementById("adrN").setAttribute('value',toString(adrN));

	var adrFirst = adrN +1;
	toString(adrFirst);
	//document.getElementById("First").innerHTML =toString(adrFirst);
	document.getElementById("First").setAttribute('value',toString(adrFirst));


	var adrDiff = adrN | ~mask;
	toString(adrDiff);
	//document.getElementById("Broadcast").innerHTML =toString(adrDiff);
	document.getElementById("Broadcast").setAttribute('value',toString(adrDiff));

	var adrLast = adrDiff -1;
	toString(adrLast);
	//document.getElementById("Last").innerHTML =toString(adrLast);
	document.getElementById("Last").setAttribute('value',toString(adrLast));

	var nb = Math.pow(2, (32-CIDR))-2;
	//document.getElementById("Nb").innerHTML =nb;
	document.getElementById("Nb").setAttribute('value',nb);

	$( "#box-resultat" ).show("slow");
	
}

function toString(data) {
	var str = (data >> 24 &0xFF).toString()+"."+
 (data >> 16 & 0xFF ).toString()+"." + (data >> 8 & 0xFF ).toString()+"." + (data & 0xFF).toString();
 
//	console.log(str);
	return str;
}
