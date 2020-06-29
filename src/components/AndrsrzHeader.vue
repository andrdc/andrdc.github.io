<template>
<div id="Home" class="site-header">
	<section class="hero is-primary is-fullheight">
		<div class="hero-head">
			<b-navbar>
				<template slot="brand">
					<b-navbar-item tag="router-link" :to="{ path: '/' }">
						AR
					</b-navbar-item>
				</template>
				<template slot="end">
					<b-navbar-item href="#Home">
						Home
					</b-navbar-item>
					<b-navbar-item href="#Projects">
						Projects
					</b-navbar-item>
				</template>
			</b-navbar>
		</div>

		<div class="hero-body">
			<div class="container has-text-centered">
				<h1 class="title is-1">{{ this.name }}</h1>
				<h2 class="subtitle is-2">{{ this.title }}</h2>
			</div>
		</div>

		<div class="hero-foot">
			<nav class="tabs">
				<div class="container">
					<ul>
						<li><a :href="this.githubUrl" target="_blank" rel="noopener">Github</a></li>
					</ul>
				</div>
			</nav>
		</div>
	</section>
</div>
</template>

<script>
export default {
	name: 'AndrsrzHeader',
	props: {
	},
	data(){
		return {
			name: 'Andrés Ruiz',
			title: 'Software Development Engineer',
			githubUrl: 'https://github.com/Andrsrz'
		}
	}
}
</script>

<style scoped>
</style>
