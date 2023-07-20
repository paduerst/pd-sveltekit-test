<script>
	import '../app.css';
</script>

<div class="top-nav">
	<nav>
		<a href="/">Home</a>
		<a href="/prismatic-dragons">The Prismatic Dragons</a>
		<a href="/dragon-builder">Dragon Builder</a>
		<a href="/about">About Petal</a>
	</nav>
</div>

<slot></slot>

<style lang="scss">
	.top-nav {
		background-color: rgb(28, 28, 28);
		overflow: hidden;

		a {
			float: left;
			color: #eee;
			padding: 12px 16px;
			text-decoration: none;
			font-size: 1rem;

			&:hover {
				background-color: #000;
				color: #fff;
			}
		}
	}
</style>
