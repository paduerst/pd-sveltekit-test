<script>
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<Header />

<div class="main-color">
	<main>
		<slot />
	</main>
</div>

<Footer />

<style>
	main {
		padding: 0 16px;
		margin: 0 auto;
		width: auto;
		max-width: 1200px;
	}

	.main-color {
		width: 100%;
		background-color: rgb(127, 50, 118);
	}
</style>
