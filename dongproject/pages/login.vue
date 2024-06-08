<template>
	<div class="container">
		<div class="login-box">
			<p class="title">로그인</p>
			<input v-model="username" type="text" id="username" class="inputs" placeholder="아이디" required />
			<input v-model="password" type="password" id="password" class="inputs" placeholder="비밀번호" required />
			<button @click="login" class="loginBtn">Login</button>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import axios from 'axios';
	
	const username = ref('');
	const password = ref('');
	
	const login = async () => {
		if (username.value && password.value) {
			try {
				const response = await axios.post('/api/login', {
					username: username.value,
					password: password.value
				});
				// handle successful login
				if (response.data.success) {
					// Redirect to a different page if needed
					router.push('/dashboard');
				}
				else {
					// handle login failure
					alert('Login failed: ' + response.data.message);
				}
			}
			catch (error) {
				//handle request error
				alert('An error occured: ' + error.message);
			}
		}
		else {
			alert('Please enter both username and password.');
		}
	};
</script>

<style scoped>
	.container {
		background-color: lightgray;
		display: flex;
		justify-content: center;
	}
	.login-box {
		background-color: lightsalmon;
		position: absolute;
		top: 10vh;
		width: 40vw;
		height: 60vh;
		border-radius: 1rem;
	}
	.title {
		font-size: 3rem;
		font-weight: 700;
		margin-top: 1rem;
		margin-bottom: 3rem;
		text-align: center;
	}
	.loginBtn {
		position: absolute;
		top: 45vh;
		left: 50%;
		transform: translateX(-50%);
	}
	.inputs {
		display: block;
		margin: 1rem auto;
	}
	@media (max-width: 450px) {
		.login-box {
			width: 70vw;
		}
		.title {
			font-size: 2rem;
			margin-top: 3rem;
		}
		.inputs {
			font-size: 1rem;
		}
		.loginBtn {
			font-size: 1.2rem;
		}
	}
</style>