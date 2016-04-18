var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

loopCount = colors.length > reindeer.length ? colors.length : reindeer.length ;

for (var i = 0; i < loopCount ; i++) {
    var colorsForReindeer = colors[i];
    var reindeerNames = reindeer[i];
    if ( reindeerNames !== undefined ) {
      hohohoElement.innerHTML += "<div>" + colorsForReindeer + " " + reindeerNames + "</div>";
    } else {
      hohohoElement.innerHTML += "<div>" + colorsForReindeer + " Some Other Reindeer" + "</div>";
    }
}