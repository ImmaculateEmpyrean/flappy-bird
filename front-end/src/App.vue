<template>
	<div class="container">
		<h1 class="heading1">Flappy Bird Online</h1>
		<div id="app-wrapper">
			<GameCard />
			<ScoreCard />
		</div>
	</div>
</template>

<script>
import GameCard from "./components/GameCard/GameCard.vue";
import ScoreCard from "./components/ScoreCard/ScoreCard.vue";

export default {
	name: "App",
	components: {
		GameCard,
		ScoreCard,
	},
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_text.scss";
</style>
