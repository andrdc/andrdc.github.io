<template>
<div id="Projects" class="site-main">
	<div class="card" v-for="project in projects" :key="project.id">
		<div class="card-content">
			<div class="media">
				<div class="media-left image" @click="goToProject(project.url)" title="Go to project">
					<figure class="image is-48x48">
						<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-4">{{ project.name }}</p>
					<p class="subtitle is-6">{{ project.type }}</p>
				</div>
			</div>
			<div class="content">
				<p>{{ project.description }}</p>
				<li class="test" v-for="tech in project.tech" :key="tech">{{ tech }}</li>
			</div>
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

.site-main {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-content: center;
}
.card {
	box-shadow: none !important;
}
.image {
	cursor: pointer;
}
li {
	list-style: none;
	text-align: center;
}
.test {
	background-color: $javascript !important;
}
</style>
