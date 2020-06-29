<template>
<div id="Projects" class="site-main">
	<span v-for="project in projects" :key="project.id">{{ project }}</span>
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
	}
}
</script>

<style scoped>
</style>
