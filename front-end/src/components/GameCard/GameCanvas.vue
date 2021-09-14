<template>
	<div id="GameCanvas-wrapper">
		<canvas id="gameCanvas"></canvas>
	</div>
</template>

<script>
export default {
	name: "GameCanvas",
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
