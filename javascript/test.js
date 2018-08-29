//var  message = "Hi! Testing short javascript code";
//alert(message);

function dropdownMenu() {
    var kitFirst = document.getElementById("dropDownClick");
    if (kitFirst.className === "topnav") {
        kitFirst.className += " responsive";
        /*change topnav to topnav.responsive*/
    } else {
        kitFirst.className = "topnav";
    }
}