<template>
<div id="app">
	<AndrsrzHeader />
	<AndrsrzProjects v-bind:projects="this.projects" />
</div>
</template>

<script>
import AndrsrzHeader from './components/AndrsrzHeader.vue';
import AndrsrzProjects from './components/AndrsrzProjects.vue';
import { Project } from './project.js';

var myProjects = [];
var webRPSGame = new Project(
	"webRPSGame",
	"Rock, Paper, Scissors, Lizard, Spock",
	"https://andrsrz.github.io/rock-paper-scissors/",
	"Web game implementing Rock, Paper, Scissors and a little more.",
	["HTML 5", "CSS 3", "JavaScript"],
	"Web"
);
myProjects.push(webRPSGame);
var webEaS = new Project(
	"webEaS",
	"Etch a Sketch",
	"https://andrsrz.github.io/etch-a-sketch/",
	"Web drawing tool",
	["HTML 5", "CSS 3", "JavaScript"],
	"Web"
);
myProjects.push(webEaS);
var webCalc = new Project(
	"webCalc",
	"Calculator",
	"https://andrsrz.github.io/calculator/",
	"Web Calculator",
	["HTML 5", "CSS 3", "JavaScript"],
	"Web"
);
myProjects.push(webCalc);
var webPomodoro = new Project(
	"webPomodoro",
	"Pomodoro Timer",
	"https://andrsrz.github.io/pomodoro/",
	"Web Pomodoro Timer",
	["HTML 5", "CSS 3", "JavaScript"],
	"Web"
);
myProjects.push(webPomodoro);
var webEEMX = new Project(
	"webEEMX",
	"Equipo Eléctrico MX",
	"https://equipoelectrico.com.mx",
	"Webpage",
	["HTML 5", "CSS 3", "JavaScript", "Apache 2"],
	"Web"
);
myProjects.push(webEEMX);
var webAlc = new Project(
	"webAlc",
	"Alcanum",
	"https://alcanum.com",
	"Veterinary Webpage",
	["HTML 5", "CSS 3", "JavaScript"],
	"Web"
);
myProjects.push(webAlc);
var webTyra = new Project(
	"webTyra",
	"Tyra",
	"https://andrsrz.github.io/tyra/",
	"Veterinary Management",
	["JavaScript"],
	"Web"
);
myProjects.push(webTyra);
var cppPE = new Project(
	"cppPE",
	"Programming Exercises",
	"https://andrsrz.github.io/pewebpage/",
	"Learn C++ and improve your problem solving skill",
	["C++"],
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
	["Python", "Java", "Raspberry Pi", "AWS"],
	"Python"
);
myProjects.push(pyIoT);

export default {
	name: 'App',
	components: {
		AndrsrzHeader,
		AndrsrzProjects
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
