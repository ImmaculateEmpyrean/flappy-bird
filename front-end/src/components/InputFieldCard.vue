<template>
	<div id="InputFieldCard-wrapper">
		<div class="row card">
			<div class="input-field col s6">
				<input id="last_name" type="text" class="validate" />
				<label for="last_name" class="heading3">Name</label>
			</div>

			<div class="input-field col s6">
				<select>
					<option value="" disabled selected>Select Your Country</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>
				<label>Materialize Select</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "InputFieldCard",
	mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_text.scss";
@import "../assets/scss/_settings.scss";
</style>
