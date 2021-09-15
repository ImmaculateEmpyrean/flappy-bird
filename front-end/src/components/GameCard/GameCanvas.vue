<template>
	<div id="GameCanvas-wrapper">
		<canvas id="gameCanvas" width="300" height="500"></canvas>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "GameCanvas",
	inject: ["playerName", "playerCountryCode"],
	mounted() {
		require("../../js/game.js");
		window.addEventListener(
			"game:over",
			function(e) {
				if (this.playerName === null || this.playerCountryCode === null) {
					if (this.playerName === null)
						console.log(
							"not posting results to the server as player name is null"
						);
					if (this.playerCountryCode === null) {
						console.log(
							"not posting results to the server as playerCountryCode is null"
						);
					}
					return;
				}
				axios.post("/newScore", {
					score: e.detail.score,
					playerName: this.playerName,
					playerCountryCode: this.playerCountryCode,
					test: "test",
				});
			}.bind(this)
		);
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
