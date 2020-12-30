var colors = [
	"#a84816", "#ff8000", "#f9d291", 
	"#015477", "#0083ba","#aae1f8", 
	"#009244", "#00b649", "#71db9f", 
	"#c3a300", "#ffcf00", "#fdefb3", 
	"#b84444", "#ff7373", "#ffb9b6"
	]
var bcolors= ["#34394c", "#5d6071", "#9d9fb4"]
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function fireworks() {
	var mull = document.createElement("div");
	var fw = document.getElementById("fw");
	fw.appendChild(mull);
	fw.style.overflow = "hidden";
	var body = document.getElementById("body");
	body.style.backgroundColor = bcolors[Math.floor(Math.random()*bcolors.length)];
	var uus = document.getElementById("uus");
	uus.style.visibility = "visible";
	var tekst = document.getElementById("start");
	tekst.innerHTML = "Klikin veel";
    var rand = getRndInteger(20, 200);
    mull.style.zIndex = -1;
    mull.style.position = "fixed";
    mull.style.top = getRndInteger(1, 100) + "%";
    mull.style.left = getRndInteger(1, 100) + "%";
    mull.style.height = rand + "px";
    mull.style.width = rand + "px";
    mull.style.borderRadius = rand/2 + "px";
    mull.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}