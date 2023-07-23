<script>
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		padding: 0 16px;
		margin: 0 auto;
		width: auto;
		max-width: 1200px;
	}
</style>
