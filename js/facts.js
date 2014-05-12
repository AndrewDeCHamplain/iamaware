//Globals
var myfacts = new Firebase('https://facts-page.firebaseio.com/');
var dropdownValue = 0;
var facts_database;

//Functions 
function dropdownChange(value) 
{
	dropdownValue = value;
	
	if(dropdownValue == 0) {
		document.getElementById('color').src = "../images/blank.png"; 
	}
	else if (dropdownValue == 1) {
		document.getElementById('color').src = "../images/mapcanada.png"; 
	}
	else if (dropdownValue == 2) {
		document.getElementById('color').src = "../images/mapusa.png"; 
	}
	else if (dropdownValue == 3) {
		document.getElementById('color').src = "../images/mapbrazil.png"; 
	}
	else if (dropdownValue == 4) {
		document.getElementById('color').src = "../images/mapangola.png"; 
	}
	else if (dropdownValue == 5) {
		document.getElementById('color').src = "../images/mapethiopia.png"; 
	}
	else if (dropdownValue == 6) {
		document.getElementById('color').src = "../images/maprwanda.png"; 
	}
	else if (dropdownValue == 7) {
		document.getElementById('color').src = "../images/mapafghan.png"; 
	}
	else if (dropdownValue == 8) {
		document.getElementById('color').src = "../images/mapaussie.png"; 
	}
	else if (dropdownValue == 9) {
		document.getElementById('color').src = "../images/mapchina.png"; 
	}
	else if (dropdownValue == 10) {
		document.getElementById('color').src = "../images/mapindia.png"; 
	}
	else if (dropdownValue == 11) {
		document.getElementById('color').src = "../images/mapmexico.png"; 
	}
	else if (dropdownValue == 12) {
		document.getElementById('color').src = "../images/mapegypt.png"; 
	}
	else if (dropdownValue == 13) {
		document.getElementById('color').src = "../images/maprussia.png"; 
	}
	clearInterval(refreshIntervalId);
	myFunction2();
}

function myFunction2() 
{
	refreshIntervalId = setInterval("myFunction4()",5000);
}
	
function myFunction4() {
	var div = document.getElementById('the_fact');
	var element = document.getElementById('p_1');
	element.style.borderWidth = '2px';
	var positionLeft = Math.floor(Math.random() * (0.70 * screen.width));
	var positionTop = Math.floor(Math.random() * (0.70 * screen.height));
	div.style.top = positionTop;
	div.style.left = positionLeft;
	
	var the_number = 0;
	if(dropdownValue == 0)
		{the_number=Math.floor(Math.random()*9)+1;}
	else
		{the_number=Math.floor(Math.random()*3)+1+(dropdownValue-1)*3;}
	console.log(dropdownValue);
	console.log(the_number);
	element.innerHTML=facts_database[the_number];
	var element_bub= document.getElementById ('myimg');
}

//Execute

myfacts.on('value', function(snapshot) {
	console.log( snapshot.val());
	facts_database = snapshot.val();
	var element = document.getElementById ('p_1');
	var div = document.getElementById('the_fact');
	element.style.borderWidth = '2px';
	var positionLeft = Math.floor(Math.random() * (0.70 * screen.width));
	var positionTop = Math.floor(Math.random() * (0.70 * screen.height));
	div.style.top = positionTop;
	div.style.left = positionLeft;
	element.innerHTML=facts_database[Math.floor(Math.random()*9)+1];
	console.log(facts_database[1]);
	return(facts_database);
});		