<template>
<div id="Projects" class="site-main">
	<form>
		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox" :checked=preview>Project Preview
				</label>
			</div>
		</div>
	</form>
	<div class="card" v-for="project in projects" :key="project.id">
		<div class="card-content link">
			<div class="media">
				<div class="media-left" @click="goToProject(project.url)" title="Go to project">
					<b-icon
						class="fas fa-rocket"
						size="is-large"
						type="is-primary">
					</b-icon>
				</div>
				<div class="media-content">
					<p class="title is-4">{{ project.name }}</p>
					<p class="subtitle is-6">{{ project.type }}</p>
				</div>
			</div>
			<div class="content">
				<p>{{ project.description }}</p>
				<li v-for="tech in project.tech" :key="tech" :class="tech">{{ tech }}</li>
			</div>
		</div>
		<div class="page">
			<iframe id="frame" :src=project.url></iframe>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'AndrsrzProjects',
	props: {
		projects: Array
	},
	data(){
		return {
			preview: true
		}
	},
	methods: {
		goToProject(url){
			window.open(url, "_blank");
		}
	}
}
</script>

<style lang="scss" scoped>
$white: #FFF;
$htmlfive: #E54E26;
$htmlfive-invert: findColorInvert($htmlfive);
$cssthree: #006EBA;
$cssthree-invert: findColorInvert($cssthree);
$foundation: #1779BA;
$nes: #D7D7D7;
$buefy: #7957D5;
$javascript: #E7C72F;
$javascript-invert: findColorInvert($javascript);
$vue: #41B883;
$vue-text: #35495E;
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

.site-main {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-content: center;
}
.card {
	box-shadow: none !important;
}
.icon {
	cursor: pointer;
}
li {
	list-style: none;
	text-align: center;
}
.HTML-5 {
	background-color: $htmlfive;
	color: $white;
}
.CSS-3 {
	background-color: $cssthree;
	color: $white;
}
.Foundation {
	background-color: $foundation;
	color: $white;
}
.NES-CSS {
	background-color: $nes;
}
.Buefy {
	background-color: $buefy;
	color: $white;
}
.JavaScript {
	background-color: $javascript;
}
.VueJS {
	background-color: $vue;
	color: $vue-text;
}
.Apache {
	background-color: $apache;
	color: $white;
}
.Cpp {
	background-color: $cpp;
	color: $white;
}
.Java {
	background-color: $java;
	color: $white;
}
.Python {
	background-color: $python;
	color: $white;
}
.Android {
	background-color: $android;
}
.RaspberryPi {
	background-color: $berry;
	color: $white;
}
.AWS {
	background-color: $aws;
	color: $white;
}

#frame {
	width: 500px;
	height: 1000px;
	border: 2px solid black;
	zoom: 0.50;
	-moz-transform: scale(0.50);
	-moz-transform-origin: 0 0;
}

.page{
	display: none;
	width: 100%;
}

.link:hover + .page,.page:hover{
	display: block;
	position: relative;
	z-index: 100;
}
</style>
