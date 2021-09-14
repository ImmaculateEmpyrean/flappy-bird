<template>
	<div id="HighScoreThisSession-wrapper">
		<h2 class="heading3 main-heading">Session HighScore</h2>
		<table class="highlight centered">
			<tbody>
				<!-- start only row -->
				<tr>
					<td class="text">{{ sessionHighScore.name }}</td>
					<td class="text">{{ sessionHighScore.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${sessionHighScore.countryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended only row -->
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: "HighScoreThisSession",
	props: {
		sessionHighScore: {
			type: Object,
			default: function() {
				return {
					name: "Null",
					score: 0,
					countryCode: "Null",
					country: "Nill",
				};
			},
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_settings.scss";
@import "@/assets/scss/_text.scss";

#HighScoreThisSession-wrapper {
	width: 100%;

	@include atleast-desktop {
		flex: 1 1 50%;
	}
}

.main-heading {
	text-align: center;
}
</style>
