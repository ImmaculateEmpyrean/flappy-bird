<template>
	<div class="app-container">
		<div class="container">
			<h1 class="heading1">Flappy Bird Online</h1>
			<div id="app-wrapper">
				<GameCard />
				<ScoreCard />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import GameCard from "./components/GameCard/GameCard.vue";
import ScoreCard from "./components/ScoreCard/ScoreCard.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		GameCard,
		ScoreCard,
		Footer,
	},
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_text.scss";
</style>

<style lang="scss">
body {
	display: flex;
	min-height: 100vh;
	flex-direction: column;
}

main {
	flex: 1 0 auto;
}
</style>
