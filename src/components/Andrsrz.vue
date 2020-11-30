<template lang="pug">
div#me
	section.hero.is-primary.is-fullheight
		div.hero-body
			div.has-text-left
				h1#title.is-size-1 {{ $t("name") }} &#127758; &#128039;
				h2#subtitle.is-size-2( v-t="'title'" )
			div.has-text-right
				div
					h3#about-me.is-size-4
						| {{ $t("graduated") }}
						| <a :href="this.cetiUrl" target="_blank" rel="noopener"><em>{{ $t("engineer") }}</em></a>
						| &#127891;
						| {{ $t("buzzOut") }}
						| <a :href="this.sptUrl" target="_blank" rel="noopener"><em>{{ $t("music") }}</em></a>
						| &#127928;
						| <a :href="this.steamUrl" target="_blank" rel="noopener"><em>{{ $t("videoGames") }}</em></a>
						| &#128126;
						| <a :href="this.novelUrl" target="_blank" rel="noopener"><em>{{ $t("graphicNovels") }}</em></a>
						| &#128214; {{ $t("and") }}
						| <a :href="this.tkdUrl" target="_blank" rel="noopener"><em>{{ $t("tkd") }}</em></a>
						| &#129355;
				br
				div
					h3#what-i-do.is-size-4
						| {{ $t("projects") }}
						| <a :href="this.githubProfileUrl" target="_blank" rel="noopener"><em>{{ $t("github") }}</em></a>
						| &#128187;
						br
						| {{ $t("more") }}
						| <a :href="this.itchUrl" target="_blank" rel="noopener"><em>{{ $t("games") }}</em></a> /
						| <a :href="this.workshopUrl" target="_blank" rel="noopener"><em>{{ $t("mods") }}</em></a>
						| &#127918;
		div.hero-foot
			nav.tabs
				div.container
					ul
						li
							a(
								:href="this.githubUrl"
								target="_blank"
								rel="noopener"
								v-t="'code'" )
						li
							LocaleSwitcher
</template>

<script lang="js">
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";

export default {
	name: "Andrsrz",
	components: { LocaleSwitcher },
	data(){
		return {
			cetiUrl: process.env.VUE_APP_cetiUrl,
			sptUrl: process.env.VUE_APP_sptUrl,
			steamUrl: process.env.VUE_APP_steamUrl,
			novelUrl: process.env.VUE_APP_novelUrl,
			tkdUrl: process.env.VUE_APP_tkdUrl,
			itchUrl: process.env.VUE_APP_itchUrl,
			workshopUrl: process.env.VUE_APP_workshopUrl,
			githubProfileUrl: process.env.VUE_APP_githubProfileUrl,
			githubUrl: process.env.VUE_APP_githubUrl
		}
	}
};
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
  color: #D2386C;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  cursor: pointer;
}

a:hover {
  color: #926AA6;
}

@media (max-width: 450px){
  #about-me, #what-i-do {
	width: 340px;
  }
}
</style>
