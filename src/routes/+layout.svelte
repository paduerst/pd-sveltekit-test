<div class="top-nav">
	<nav>
		<a href="/">Home</a>
		<a href="/prismatic-dragons">The Prismatic Dragons</a>
		<a href="/dragon-builder">Dragon Builder</a>
		<a href="/about">About Petal</a>
	</nav>
</div>

<slot></slot>

<style>
	:global(body) {
		margin: 0;
	}

	.top-nav {
		background-color: rgb(28, 28, 28);
		overflow: hidden;
	}

	.top-nav a {
		float: left;
		color: rgb(249, 249, 249);
		text-align: center;
		padding: 12px 16px;
		text-decoration: none;
		font-size: 1rem;
	}

	.top-nav a:hover {
		background-color: rgb(0, 0, 0);
		color: rgb(255, 255, 255);
	}
</style>
