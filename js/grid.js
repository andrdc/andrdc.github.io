const WEB_PROJECTS = ["https://andrsrz.github.io/rock-paper-scissors/",
						"https://andrsrz.github.io/etch-a-sketch/",
						"https://andrsrz.github.io/calculator/",
						"https://equipoelectrico.com.mx",
						"https://alcanum.com"];
const CPP_PROJECTS = ["https://andrsrz.github.io/tyra/",
						"https://andrsrz.github.io/programming-exercises/",
						"https://andrsrz.github.io/sdl-examples/"];
const JAVA_PROJECTS = ["https://github.com/Andrsrz/tyra-mobile/"];
const SCHOOL_PROJECTS = ["https://github.com/Andrsrz/graficas-por-computadora-2D-3",
						"https://github.com/Andrsrz/computacion-paralela",
						"https://github.com/Andrsrz/tecnologias-emergente"];
const WEB_FLEX_ID = 'webProjects';
const CPP_FLEX_ID = "cppProjects";
const JAVA_FLEX_ID = "javaProjects";
const SCHOOL_FLEX_ID = "schoolProjects";

function createDiv(whichFlex, page){
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id", "div" + page);
	newDiv.setAttribute("class", "flexChild");
	document.getElementById(whichFlex).appendChild(newDiv);
	newDiv.innerHTML = "<a href='" + page + "'>Site</a>";
}

function createFlex(webPages, whichFlex){
	for(let i = 0; i <= webPages.length - 1; i++){
		createDiv(whichFlex, webPages[i]);
	}
}

function hoverListener(){
	let allCells = document.querySelectorAll(".cell");
	return allCells.forEach((cell) =>
		cell.addEventListener("mouseover", function (e) {
		}));
}

/* Populate web page dynamically */
createFlex(WEB_PROJECTS, WEB_FLEX_ID);
createFlex(CPP_PROJECTS, CPP_FLEX_ID);
createFlex(JAVA_PROJECTS, JAVA_FLEX_ID);
createFlex(SCHOOL_PROJECTS, SCHOOL_FLEX_ID);
