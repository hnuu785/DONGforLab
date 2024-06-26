// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
	server: {
		port: 3000,
		host: '0.0.0.0',
		timing: false
	},
})
