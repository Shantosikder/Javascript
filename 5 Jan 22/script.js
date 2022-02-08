
function showInfo(){

	var allinfo ="";

	var items = document.forms[0].elements.length;

	//alert(items);

	for(var i=0; i<items; i++){

		allinfo += document.forms[0].elements[i].value + "\n";

	}

	document.forms[1].elements[0].value = allinfo
}