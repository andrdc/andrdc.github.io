webRPSGame = new Project(
	"webRPSGame",
	"Rock, Paper, Scissors, Lizard, Spock",
	"https://andrsrz.github.io/rock-paper-scissors/",
	"Web game implementing Rock, Paper, Scissors and a little more.",
	["HTML 5", "CSS 3", "JavaScript"],
	"web"
);

webEaS = new Project(
	"webEaS",
	"Etch a Sketch",
	"https://andrsrz.github.io/etch-a-sketch/",
	"Web drawing tool",
	["HTML 5", "CSS 3", "JavaScript"],
	"web"
);

webCalc = new Project(
	"webCalc",
	"Calculator",
	"https://andrsrz.github.io/calculator/",
	"Web Calculator",
	["HTML 5", "CSS 3", "JavaScript"],
	"web"
);

webEEMX = new Project(
	"webEEMX",
	"Equipo El&eacute;ctrico MX",
	"https://equipoelectrico.com.mx",
	"",
	["HTML 5", "CSS 3", "JavaScript", "Apache 2"],
	"web"
);

webAlc = new Project(
	"webAlc",
	"Alcanum",
	"https://alcanum.com",
	"",
	["HTML 5", "CSS 3", "JavaScript"],
	"web"
);

const WEB_PROJECTS = [webRPSGame, webEaS, webCalc, webEEMX, webAlc];
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
const DIV_SIZE = "250px";

function createDiv(whichFlex, project){
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id", "div" + project.id);
	newDiv.setAttribute("class", "flexChild");
	newDiv.style.width = DIV_SIZE;
	newDiv.style.height = DIV_SIZE;
	document.getElementById(whichFlex).appendChild(newDiv);
	let title = document.createElement("h3");
	title.innerHTML = project.name;
	newDiv.appendChild(title);
	let techUsed = document.createElement("p");
	let tech = "";
	for(let i = 0; i < project.tech.length; i++){
		tech += project.tech[i];
	}
	techUsed.innerHMTL = tech;
	newDiv.appendChild(techUsed);
}

function createFlex(projects, whichFlex){
	for(let i = 0; i <= projects.length - 1; i++){
		createDiv(whichFlex, projects[i]);
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
// Createflex(CPP_PROJECTS, CPP_FLEX_ID);
// createFlex(JAVA_PROJECTS, JAVA_FLEX_ID);
// createFlex(SCHOOL_PROJECTS, SCHOOL_FLEX_ID);
