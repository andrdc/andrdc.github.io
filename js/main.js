webRPSGame = new Project(
	"webRPSGame",
	"Rock, Paper, Scissors, Lizard, Spock",
	"https://andrsrz.github.io/rock-paper-scissors/",
	"Web game implementing Rock, Paper, Scissors and a little more.",
	["HTML 5", "CSS 3", "JavaScript"],
	"Web"
);

webEaS = new Project(
	"webEaS",
	"Etch a Sketch",
	"https://andrsrz.github.io/etch-a-sketch/",
	"Web drawing tool",
	["HTML 5", "CSS 3", "JavaScript"],
	"Web"
);

webCalc = new Project(
	"webCalc",
	"Calculator",
	"https://andrsrz.github.io/calculator/",
	"Web Calculator",
	["HTML 5", "CSS 3", "JavaScript"],
	"Web"
);

webPomodoro = new Project(
	"webPomodoro",
	"Pomodoro Timer",
	"https://andrsrz.github.io/pomodoro/",
	"Web Pomodoro Timer",
	["HTML 5", "CSS 3", "JavaScript"],
	"Web"
);

webEEMX = new Project(
	"webEEMX",
	"Equipo El&eacute;ctrico MX",
	"https://equipoelectrico.com.mx",
	"",
	["HTML 5", "CSS 3", "JavaScript", "Apache 2"],
	"Web"
);

webAlc = new Project(
	"webAlc",
	"Alcanum",
	"https://alcanum.com",
	"",
	["HTML 5", "CSS 3", "JavaScript"],
	"Web"
);

cppTyra = new Project(
	"cppTyra",
	"Tyra",
	"https://andrsrz.github.io/tyrawebpage/",
	"Veterinary Management for Linux",
	["C++", "Qt", "PostgreSQL"],
	"C++"
);

cppPE = new Project(
	"cppPE",
	"Programming Exercises",
	"https://andrsrz.github.io/pewebpage/",
	"Learn C++ and improve your problem solving skill",
	["C++"],
	"C++"
);

cppSDLE = new Project(
	"cppSDLE",
	"SDL Examples",
	"https://andrsrz.github.io/sdl-examples/",
	"Examples using Simple Direct Media Layer library",
	["C++", "SDL2"],
	"C++"
);

javaTyra = new Project(
	"javaTyra",
	"Tyra Mobile",
	"https://github.com/Andrsrz/tyra-mobile/",
	"Tyra client for Android",
	["Java", "Android"],
	"Java"
);

javaGraf = new Project(
	"javaGraf",
	"Graficas por Computadora 2D y 3D",
	"https://github.com/Andrsrz/graficas-por-computadora-2D-3D/",
	"",
	["Java"],
	"Java"
);

javaCompPar = new Project(
	"javaCompPar",
	"Computaci&oacute;n Paralela",
	"https://github.com/Andrsrz/computacion-paralela/",
	"",
	["Java"],
	"Java"
);

pyIoT = new Project(
	"pyIoT",
	"Tecnolog&iacute;as Emergentes",
	"https://github.com/Andrsrz/tecnologias-emergentes/",
	"",
	["Python", "Java", "Raspberry Pi", "AWS"],
	"Python"
);

const WEB_PROJECTS = [webRPSGame, webEaS, webCalc, webPomodoro, webEEMX, webAlc];
const CPP_PROJECTS = [cppTyra, cppPE, cppSDLE];
const JAVA_PROJECTS = [javaTyra];
const SCHOOL_PROJECTS = [javaGraf, javaCompPar, pyIoT];
const PROJECTS = [WEB_PROJECTS, CPP_PROJECTS, JAVA_PROJECTS, SCHOOL_PROJECTS];
const WEB_FLEX_ID = "webProjects";
const CPP_FLEX_ID = "cppProjects";
const JAVA_FLEX_ID = "javaProjects";
const SCHOOL_FLEX_ID = "schoolProjects";
const DIV_SIZE = "250px";
const HTML = "HTML 5";
const CSS = "CSS 3";
const JS = "JavaScript";
const APACHE = "Apache 2";
const CPP = "C++";
const PSQL = "PostgreSQL";
const QT = "Qt";
const SDL = "SDL2";
const JAVA = "Java";
const ANDROID = "Android";
const PY = "Python";
const BERRY = "Raspberry Pi";
const AWS = "AWS";

function createFlex(projects, whichFlex){
	for(let i = 0; i < projects.length; i++){
		createDiv(whichFlex, projects[i]);
	}
}

function createDiv(whichFlex, project){
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id", "div" + project.id);
	newDiv.setAttribute("class", "flexChild");
	newDiv.style.width = DIV_SIZE;
	newDiv.style.height = DIV_SIZE;
	document.getElementById(whichFlex).appendChild(newDiv);
	populateDiv(newDiv, project);
}

function populateDiv(whichDiv, project){
	let title = document.createElement("h3");
	title.innerHTML = project.name;
	whichDiv.appendChild(title);
	for(let i = 0; i < project.tech.length; i++){
		let techUsed = document.createElement("p");
		techUsed.innerHTML = project.tech[i];
		setParagraphStyle(techUsed, project.tech[i]);
		whichDiv.appendChild(techUsed);
	}
}

function setParagraphStyle(paragraph, tech){
	paragraph.style.fontWeight = "bold";
	paragraph.style.color = "white";
	if(tech == HTML){
		paragraph.style.backgroundColor = "#E54E26";
	}else if(tech == CSS){
		paragraph.style.backgroundColor = "#006EBA";
	}else if(tech == JS){
		paragraph.style.backgroundColor = "#E7C72F";
		paragraph.style.color = "black";
	}else if(tech == APACHE){
		paragraph.style.backgroundColor = "#AC0000";
	}else if(tech == CPP){
		paragraph.style.backgroundColor = "#017CC7";
	}else if(tech == PSQL){
		paragraph.style.backgroundColor = "#316192";
	}else if(tech == QT){
		paragraph.style.backgroundColor = "#41CD52";
	}else if(tech == SDL){
		paragraph.style.backgroundColor = "#132B48";
	}else if(tech == JAVA){
		paragraph.style.backgroundColor = "#EA2D2F";
	}else if(tech == ANDROID){
		paragraph.style.backgroundColor = "#3DDC84";
		paragraph.style.color = "black";
	}else if(tech == PY){
		paragraph.style.backgroundColor = "#3873A3";
	}else if(tech == BERRY){
		paragraph.style.backgroundColor = "#C51D4A";
	}else if(tech == AWS){
		paragraph.style.backgroundColor = "#E9912F";
	}
}

function setOnClickEvents(projects){
	for(let i = 0; i < projects.length; i++){
		for(let j = 0; j < projects[i].length; j++){
			let div = document.getElementById("div" + projects[i][j].id);
			div.setAttribute("onclick", "window.open('" + projects[i][j].url + "', '_blank')");
		}
	}
}

/* Populate web page dynamically */
createFlex(WEB_PROJECTS, WEB_FLEX_ID);
createFlex(CPP_PROJECTS, CPP_FLEX_ID);
createFlex(JAVA_PROJECTS, JAVA_FLEX_ID);
createFlex(SCHOOL_PROJECTS, SCHOOL_FLEX_ID);
setOnClickEvents(PROJECTS);
