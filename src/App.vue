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
var cppPE = new Project(
	"cppPE",
	"Programming Exercises",
	"https://andrsrz.github.io/pewebpage/",
	"Learn C++ and improve your problem solving skill",
	["C++"],
	"C++"
);
myProjects.push(cppPE);
var webRPSGame = new Project(
	"webRPSGame",
	"Rock, Paper, Scissors, Lizard, Spock",
	"https://andrsrz.github.io/rock-paper-scissors/",
	"Web game implementing Rock, Paper, Scissors and a little more.",
	["HTML 5", "CSS 3", "JavaScript"],
	"Web"
);
myProjects.push(webRPSGame);

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
$htmlfive: #E54E26;
$htmlfive-invert: findColorInvert($htmlfive);
$cssthree: #006EBA;
$cssthree-invert: findColorInvert($cssthree);
$javascript: #E7C72F;
$javascript-invert: findColorInvert($javascript);
$apache: #AC0000;
$apache-invert: findColorInvert($apache);
$cpp: #017CC7;
$cpp-invert: findColorInvert($cpp);
$java: #EA2D2F;
$java-invert: findColorInvert($java);
$android: #3DDC84;
$android-invert: findColorInvert($android);
$python: #3873A3;
$python-invert: findColorInvert($python);
$berry: #C51D4A;
$berry-invert: findColorInvert($berry);
$aws: #E9912F;
$aws-invert: findColorInvert($aws);

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
	"twitter": ($twitter, $twitter-invert),
	"htmlfive": ($htmlfive, $htmlfive-invert),
	"cssthree": ($cssthree, $cssthree-invert),
	"javascript": ($javascript, $javascript-invert),
	"apache": ($apache, $apache-invert),
	"cpp": ($cpp, $cpp-invert),
	"java": ($java, $java-invert),
	"android": ($android, $android-invert),
	"python": ($python, $python-invert),
	"berry": ($berry, $berry-invert),
	"aws": ($aws, $aws-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
