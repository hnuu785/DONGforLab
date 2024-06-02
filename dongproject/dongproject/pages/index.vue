<template>
	<div class="container">
		<div class="titleContainer">
			<p class="title">DONG</p>
		</div>
		<div class="loginBtnContainer">
			<NuxtLink to="/login" class="loginLink">Login</NuxtLink>
		</div>
	</div>
</template>

<style scoped>
	.container {
		background-color: lightgray;
		height: 100vh;
	}
	.titleContainer {
		height: 60vh;
		/*background-color: teal;*/
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.title {
		font-size: 5rem;
	}
	.loginBtnContainer {
		display: flex;
		justify-content: center;
	}
	.loginLink {
		font-size: 3.5rem;
		text-decoration: none;
		color: black;
	}
	.loginLink:hover {
		color: salmon;
	}
	@media (max-width: 450px) {
		.container {
		background-color: lightgray;
		display: flex;
		justify-content: center;
		flex-direction: column;
		}
		.title {
			font-size: 50px;
			text-align: center;
		}
		.loginLink {
			font-size: 30px;
			text-align: center;
			text-decoration: none;
		}
	}
</style>