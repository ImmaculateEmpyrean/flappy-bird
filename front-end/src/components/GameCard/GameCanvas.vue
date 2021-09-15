<template>
	<div id="GameCanvas-wrapper">
		<canvas id="gameCanvas"></canvas>
	</div>
</template>

<script>
import { Stage, Shape } from "@createjs/easeljs";

export default {
	name: "GameCanvas",
	methods: {
		loadBackground(stage) {
			let background = new Shape();
			background.graphics
				.beginLinearGradientFill(
					["#2573BB", "#6CB8DA", "#567A32"],
					[0.0, 0.27, 0.3],
					0,
					0,
					0,
					480
				)
				.drawRect(0, 0, 320, 480);

			background.x = 0;
			background.y = 0;
			background.name = "background";
			background.cache(0, 0, 320, 480);

			stage.addChild(background);
			stage.update();
		},
	},
	mounted() {
		let stage = new Stage("gameCanvas");
		this.loadBackground(stage);
	},
};
</script>

<style lang="scss" scoped>
#GameCanvas-wrapper {
	display: flex;
	justify-content: center;
}

#gameCanvas {
	min-height: 480px;
	width: 320px;
	border: 1px solid black;
}
</style>
