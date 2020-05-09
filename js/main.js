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

cppTyra = new Project(
	"cppTyra",
	"Tyra",
	"https://andrsrz.github.io/tyra/",
	"Veterinary Management for Linux",
	["C++", "Qt", "PostgreSQL"],
	"cpp"
);

cppPE = new Project(
	"cppPE",
	"Programming Exercises",
	"https://andrsrz.github.io/programming-exercises",
	"Learn C++ and improve your problem solving skill",
	["C++"],
	"cpp"
);

cppSDLE = new Project(
	"cppSDLE",
	"SDL Examples",
	"https://andrsrz.github.io/sdl-examples/",
	"Examples using Simple Direct Media Layer library",
	["C++", "SDL2"],
	"cpp"
);

javaTyra = new Project(
	"javaTyra",
	"Tyra Mobile",
	"https://github.com/Andrsrz/tyra-mobile/",
	"Tyra client for Android",
	["Java", "Android"],
	"java"
);

javaGraf = new Project(
	"javaGraf",
	"Graficas por Computadora 2D y 3D",
	"https://github.com/Andrsrz/graficas-por-computadora-2D-3",
	"",
	["Java"],
	"java"
);

javaCompPar = new Project(
	"javaCompPar",
	"Computaci&oacute;n Paralela",
	"https://github.com/Andrsrz/computacion-paralela",
	"",
	["Java"],
	"java"
);

pyIoT = new Project(
	"pyIoT",
	"Internet of Things",
	"https://github.com/Andrsrz/tecnologias-emergente",
	"",
	["Python", "Java", "Raspberry Pi", "AWS"],
	"python"
);

const WEB_PROJECTS = [webRPSGame, webEaS, webCalc, webEEMX, webAlc];
const CPP_PROJECTS = [cppTyra, cppPE, cppSDLE];
const JAVA_PROJECTS = [javaTyra];
const SCHOOL_PROJECTS = [javaGraf, javaCompPar, pyIoT];
const WEB_FLEX_ID = "webProjects";
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
	for(let i = 0; i < project.tech.length; i++){
		let techUsed = document.createElement("h5");
		techUsed.innerHMTL = project.tech[i];
		newDiv.appendChild(techUsed);
	}
}

function createFlex(projects, whichFlex){
	for(let i = 0; i < projects.length; i++){
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
createFlex(CPP_PROJECTS, CPP_FLEX_ID);
createFlex(JAVA_PROJECTS, JAVA_FLEX_ID);
createFlex(SCHOOL_PROJECTS, SCHOOL_FLEX_ID);
