<template>
	<div class="container">
		<div class="iconContainer">
			<NuxtLink to="/login" class="dongIcon"></NuxtLink>
			<p style="margin: 0; padding: 0; text-align: center;">PM</p>
		</div>
		<div class="iconContainer">
			<NuxtLink to="/login" class="dongIcon" style="background-color: teal"></NuxtLink>
			<p style="margin: 0; padding: 0; text-align: center;">Lab</p>
		</div>
		
		<NuxtLink to="/login" class="createDong">NEW</NuxtLink>
	</div>
</template>

<style scoped>
	@media (max-width: 450px) {
		.dongIcon {
			display: block;
			background-color: tomato;
			width: 5rem;
			height: 5rem;
			border-radius: 1rem;
			margin: 0rem 1rem;
		}
		.createDong {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: blue;
			width: 4rem;
			height: 4rem;
			border-radius: 3rem;
			margin: 0.5rem 1rem;
			text-decoration: none;
			color: white;
			font-size: 1.5rem;
			font-weight: 600;
		}
	}
	.container {
		background-color: lightgray;
		height: 100vh;
		padding: 2rem 1rem;
		display: flex;
		flex-direction: row;
	}
</style>