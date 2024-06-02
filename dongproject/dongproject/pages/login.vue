<template>
	<div class="container">
		<div class="login-box">
			<p class="title">Login</p>
			<label>email</label>
			<input v-model="email" type="email" id="email" required />
			<label>password</label>
			<input v-model="password" type="password" id="password" required />
			<button type="submit" class="loginBtn">Login</button>
		</div>
	</div>
</template>

<style scoped>
	.container {
		background-color: lightgray;
		height: 100vh;
		display: flex;
		justify-content: center;
	}
	.login-box {
		background-color: lightsalmon;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		top: 20vh;
		width: 40vw;
		height: 60vh;
		border-radius: 1rem;
	}
	.title {
		font-size: 3rem;
		font-weight: 700;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	.loginBtn {
		margin-top: 1.5rem;
		margin-bottom: 1rem;
	}
	@media (max-width: 450px) {
		.login-box {
			margin: 0 6rem;
		}
	}
</style>