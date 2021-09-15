<template>
	<div id="GameCanvas-wrapper">
		<canvas id="gameCanvas" width="300" height="500"></canvas>
	</div>
</template>

<script>
export default {
	name: "GameCanvas",
	mounted() {
		require("../../js/game.js");
	},
};
</script>

<style lang="scss" scoped>
#GameCanvas-wrapper {
	display: flex;
	justify-content: center;
}

#gameCanvas {
	border: 1px solid black;
}
</style>
