<template>
<div id="app">
	<AndrsrzHeader />
	<AndrsrzProjects v-bind:projects="this.projects" />
	<AndrsrzFooter />
</div>
</template>

<script>
import AndrsrzHeader from './components/AndrsrzHeader.vue';
import AndrsrzProjects from './components/AndrsrzProjects.vue';
import AndrsrzFooter from './components/AndrsrzFooter.vue';
import { Project } from './project.js';

var myProjects = [];
var webRPSGame = new Project(
	"webRPSGame",
	"Rock, Paper, Scissors, Lizard, Spock",
	"https://andrsrz.github.io/rock-paper-scissors/",
	"Web game implementing Rock, Paper, Scissors and a little more.",
	["HTML-5", "CSS-3", "JavaScript"],
	"Web"
);
myProjects.push(webRPSGame);
var webEaS = new Project(
	"webEaS",
	"Etch a Sketch",
	"https://andrsrz.github.io/etch-a-sketch/",
	"Web drawing tool",
	["HTML-5", "CSS-3", "JavaScript"],
	"Web"
);
myProjects.push(webEaS);
var webCalc = new Project(
	"webCalc",
	"Calculator",
	"https://andrsrz.github.io/calculator/",
	"Web Calculator",
	["HTML-5", "CSS-3", "JavaScript"],
	"Web"
);
myProjects.push(webCalc);
var webPomodoro = new Project(
	"webPomodoro",
	"Pomodoro Timer",
	"https://andrsrz.github.io/pomodoro/",
	"Web Pomodoro Timer",
	["HTML-5", "CSS-3", "JavaScript"],
	"Web"
);
myProjects.push(webPomodoro);
var webTicTacToe = new Project(
	"webTicTacToe",
	"Tic Tac Toe",
	"https://andrsrz.github.io/tic-tac-toe/",
	"Tic Tac Toe web game",
	["HTML-5", "Foundation", "JavaScript"],
	"Web"
);
myProjects.push(webTicTacToe);
var webLibrary = new Project(
	"webLibrary",
	"Library",
	"https://andrsrz.github.io/library-vuejs/",
	"Store books in your web browser and change its read status",
	["HTML-5", "NES-CSS", "VueJS"],
	"Web"
);
myProjects.push(webLibrary);
var webTodo = new Project(
	"webTodo",
	"Todo App",
	"https://andrsrz.github.io/todo-list/",
	"Todo List web App",
	["HTML-5", "CSS-3", "JavaScript"],
	"Web"
);
myProjects.push(webTodo);
var webWeather = new Project(
	"webWeather",
	"Weather Forecast App",
	"https://andrsrz.github.io/weather-app/",
	"Weather Forecast App consuming Openweather API",
	["HTML-5", "CSS-3", "VueJS"],
	"Web"
);
myProjects.push(webWeather);
var webBattleship = new Project(
	"webBattleship",
	"Battleship Clone",
	"https://andrsrz.github.io/battleship/",
	"Battleship Game PvCPU",
	["Buefy", "VueJS"],
	"Web"
);
myProjects.push(webBattleship);
var webEEMX = new Project(
	"webEEMX",
	"Equipo Eléctrico MX",
	"https://equipoelectrico.com.mx",
	"Webpage",
	["HTML-5", "CSS-3", "JavaScript", "Apache"],
	"Web"
);
myProjects.push(webEEMX);
var webAlc = new Project(
	"webAlc",
	"Alcanum",
	"https://alcanum.com",
	"Veterinary Webpage",
	["HTML-5", "CSS-3", "JavaScript"],
	"Web"
);
myProjects.push(webAlc);
var webTyra = new Project(
	"webTyra",
	"Tyra",
	"https://andrsrz.github.io/tyra/",
	"Veterinary Management",
	["Buefy", "VueJS"],
	"Web"
);
myProjects.push(webTyra);
var cppPE = new Project(
	"cppPE",
	"Programming Exercises",
	"https://andrsrz.github.io/programming-exercises/",
	"Learn C++ and improve your problem solving skill",
	["Cpp"],
	"C++"
);
myProjects.push(cppPE);
var javaGraf = new Project(
	"javaGraf",
	"Graficas por Computadora 2D y 3D",
	"https://github.com/Andrsrz/graficas-por-computadora-2D-3D/",
	"Porjects and exercises from class. 6th Semester",
	["Java"],
	"Java"
);
myProjects.push(javaGraf);
var javaCompPar = new Project(
	"javaCompPar",
	"Computación Paralela",
	"https://github.com/Andrsrz/computacion-paralela/",
	"Projects and exercises from class. 7th Semester",
	["Java"],
	"Java"
);
myProjects.push(javaCompPar);
var pyIoT = new Project(
	"pyIoT",
	"Tecnologías Emergentes",
	"https://github.com/Andrsrz/tecnologias-emergentes/",
	"Projects and exercises from class. 8th Semester",
	["Python", "Android", "RaspberryPi", "AWS"],
	"Python"
);
myProjects.push(pyIoT);

export default {
	name: 'App',
	components: {
		AndrsrzHeader,
		AndrsrzProjects,
		AndrsrzFooter
	},
	data(){
		return {
			projects: myProjects
		}
	}
}
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #92A8D1;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
	"white": ($white, $black),
	"black": ($black, $white),
	"light": ($light, $light-invert),
	"dark": ($dark, $dark-invert),
	"primary": ($primary, $primary-invert),
	"info": ($info, $info-invert),
	"success": ($success, $success-invert),
	"warning": ($warning, $warning-invert),
	"danger": ($danger, $danger-invert),
	"twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
