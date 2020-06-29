<template>
	<footer id="ContactMe" class="footer">
		<div class="content has-text-centered">
			<p>
				<a :href="this.twitter">Twitter</a> |
				<a @click="sendMeAnEmail">Contact Me</a>
			</p>
			<p>
				The source code of this website is licensed under <a :href="this.mit">MIT</a>.
			</p>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'AndrsrzFooter',
	data(){
		return {
			twitter: "https://twitter.com/andrsrzdc",
			mail: "andrsruiz@gmail.com",
			mit: "https://mit-license.org/"
		}
	},
	methods: {
		sendMeAnEmail(){
			window.open('mailto:' + this.mail + '?subject=subject&body=body');
		}
	}
}
</script>
