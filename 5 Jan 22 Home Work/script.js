function showInfo(){

    var allinfo = "";
    var item = document.forms[0].elements.length;
    for(i=0; i<item; i++ ){
        allinfo += document.forms[0].elements[i].value + "\n";
    }
    document.forms[1].elements[0].value = allinfo

}