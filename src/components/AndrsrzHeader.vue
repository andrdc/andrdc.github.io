<template>
<div id="Home" class="site-header">
	<section class="hero is-primary is-fullheight">
		<div class="hero-head">
			<nav class="navbar">
				<div class="container">
					<div class="navbar-brand">
						<a class="navbar-item">
							<span>AR</span>
						</a>
						<span class="navbar-burger burger" data-target="navbarMenuHeroA">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</div>
					<div id="navbarMenuHeroA" class="navbar-menu">
						<div class="navbar-end">
							<a href="#Home" class="navbar-item is-active">
								Home
							</a>
							<a class="navbar-item">
								Projects
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>

		<div class="hero-body">
			<div class="container has-text-centered">
				<h1 class="title">{{ this.name }}</h1>
				<h2 class="subtitle">{{ this.title }}</h2>
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
