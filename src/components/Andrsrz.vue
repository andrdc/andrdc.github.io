<template lang="pug">
div#me
	section.hero.is-primary.is-fullheight
		div.hero-body
			div.has-text-left
				h1#title.is-size-1 {{ this.name }} &#127758; &#128039;
				h2#subtitle.is-size-2 {{ this.title }}
			div.has-text-right
				div
					h3#about-me.is-size-4
						| {{ this.graduated }}
						| <a :href="this.cetiUrl" target="_blank" rel="noopener"><em>{{ this.engineer }}</em></a>
						| &#127891;
						| {{ this.buzzOut }}
						| <a :href="this.sptUrl" target="_blank" rel="noopener"><em>{{ this.music }}</em></a>
						| &#127928;
						| <a :href="this.steamUrl" target="_blank" rel="noopener"><em>{{ this.videoGames }}</em></a>
						| &#128126;
						| <a :href="this.novelUrl" target="_blank" rel="noopener"><em>{{ this.graphicNovels }}</em></a>
						| &#128214;
						| <a :href="this.tkdUrl" target="_blank" rel="noopener"><em>{{ this.tkd }}</em></a>
						| &#129355;
				br
				div
					h3#what-i-do.is-size-4
						| See my projects at my
						| <a :href="this.githubProfileUrl" target="_blank" rel="noopener"><em>GitHub</em></a>
						| &#128187; profile
						br
						| I also do
						| <a :href="this.itchUrl" target="_blank" rel="noopener"><em>Games</em></a> /
						| <a :href="this.workshopUrl" target="_blank" rel="noopener"><em>Mods</em></a>
						| &#127918;
		div.hero-foot
			nav.tabs
				div.container
					ul
						li
							a(
								:href="this.githubUrl"
								target="_blank"
								rel="noopener") Code
</template>

<script lang="js">
export default {
	name: "Andrsrz",
	props: {
	},
	data(){
		return {
			name: "Andres Ruiz",
			title: "Software Developer",
			graduated: "I graduated back in 2018 as a",
			engineer: "Software Development Engineer",
			buzzOut: "I get a buzz out of",
			music: "music",
			videoGames: "video games",
			graphicNovels: "graphic novels",
			tkd: "taekwondo",
			cetiUrl: "https://en.wikipedia.org/wiki/Centro_de_Ense%C3%B1anza_T%C3%A9cnica_Industrial",
			sptUrl: "https://open.spotify.com/user/andrsruiz",
			steamUrl: "https://steamcommunity.com/id/andrsrz/",
			novelUrl: "https://en.wikipedia.org/wiki/Scott_Pilgrim",
			tkdUrl: "https://en.wikipedia.org/wiki/Taekwondo",
			itchUrl: "https://andrsrzdc.itch.io/",
			workshopUrl: "https://steamcommunity.com/id/andrsrz/myworkshopfiles/",
			githubProfileUrl: "https://github.com/Andrsrz/",
			githubUrl: "https://github.com/Andrsrz/andrsrz.github.io/tree/dev"
		}
	}
}
</script>

<style scoped>
.hero-body {
  flex-flow: row wrap;
  justify-content: space-around;
}

#about-me, #what-i-do {
  width: 450px;
}

a {
  color: #FFF;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  cursor: pointer;
}

@media (max-width: 450px){
  #about-me, #what-i-do {
	width: 300px;
  }
}
</style>
