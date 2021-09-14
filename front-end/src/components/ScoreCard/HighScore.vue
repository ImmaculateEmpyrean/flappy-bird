<template>
	<div id="HighScore-wrapper">
		<table class="highlight striped centered">
			<thead>
				<tr>
					<th class="heading3">SNo.</th>
					<th class="heading3">Name</th>
					<th class="heading3">Score</th>
					<th class="heading3">Country</th>
				</tr>
			</thead>

			<tbody>
				<!-- start first row -->
				<tr>
					<td class="text">1.</td>
					<td class="text">{{ highScoreOne.name }}</td>
					<td class="text">{{ highScoreOne.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${highScoreOne.countryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended first row -->

				<!-- start second row -->
				<tr>
					<td class="text">2.</td>
					<td class="text">{{ highScoreTwo.name }}</td>
					<td class="text">{{ highScoreTwo.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${highScoreTwo.countryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended second row -->

				<!-- start third row -->
				<tr>
					<td class="text">3.</td>
					<td class="text">{{ highScoreThree.name }}</td>
					<td class="text">{{ highScoreThree.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${highScoreThree.countryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended third row -->

				<!-- start fourth row -->
				<tr>
					<td class="text">4.</td>
					<td class="text">{{ highScoreFour.name }}</td>
					<td class="text">{{ highScoreFour.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${highScoreFour.countryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended fourth row -->

				<!-- start fifth row -->
				<tr>
					<td class="text">5.</td>
					<td class="text">{{ highScoreFive.name }}</td>
					<td class="text">{{ highScoreFive.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${highScoreFive.countryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended fifth row -->
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: "HighScore",
	props: {
		highScoreOne: {
			type: Object,
			default: function() {
				return {
					name: "John",
					score: 100,
					countryCode: "US",
					country: "United States Of America",
				};
			},
		},
		highScoreTwo: {
			type: Object,
			default: function() {
				return {
					name: "Aiyla",
					score: 85,
					countryCode: "TR",
					country: "Turkey",
				};
			},
		},
		highScoreThree: {
			type: Object,
			default: function() {
				return {
					name: "Seo-jun",
					score: 70,
					countryCode: "KR",
					country: "Republic of Korea",
				};
			},
		},
		highScoreFour: {
			type: Object,
			default: function() {
				return {
					name: "Jean",
					score: 60,
					countryCode: "FR",
					country: "France",
				};
			},
		},
		highScoreFive: {
			type: Object,
			default: function() {
				return {
					name: "Tobias",
					score: 50,
					countryCode: "AT",
					country: "Austria",
				};
			},
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_settings.scss";
@import "@/assets/scss/_text.scss";

#HighScore-wrapper {
	width: 100%;

	@include atleast-desktop {
		flex: 0 0 50%;
	}
}
</style>
