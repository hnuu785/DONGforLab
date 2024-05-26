<template>
	<nav class="navbar">
		<ul>
			<li><NuxtLink to="/">Home</NuxtLink></li>
			<li><NuxtLink to="/about">About</NuxtLink></li>
			<li><NuxtLink to="/login">Login</NuxtLink></li>
		</ul>
	</nav>
</template>

<style>
	.navbar {
		background-color: #333;
		padding: 1rem;
	}
	.navbar ul {
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}
	.navbar a {
		color: white;
		text-decoration: none;
	}
</style>