<script>
	import '../app.css';
</script>

<header class="primary-header">
	<a href="/" class="logo-anchor">
		<img src="favicon.png" alt="Petal Quest logo" aria-label="Site home" class="logo-img" />
		<!-- <span class="logo-txt">Petal Quest</span> -->
	</a>

	<nav class="primary-navigation">
		<ul class="nav-list">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/prismatic-dragons">The Prismatic Dragons</a>
			</li>
			<li>
				<a href="/dragon-builder">Dragon Builder</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>

<slot />

<style lang="scss">
	$logoHeight: 40px;
	$logoVerticalPadding: 8px;
	$totalHeaderHeight: calc($logoHeight + 2 * $logoVerticalPadding);

	$navFontSize: 16px;
	$navFontVerticalPadding: calc(0.5 * ($totalHeaderHeight - $navFontSize));

	.primary-header {
		display: flex;
		align-items: center;
		background-color: rgb(28, 28, 28);
		overflow: hidden;
	}

	.logo-anchor {
		line-height: 0;
		display: inline-block;

		&:hover {
			background-color: #53902b;
		}
	}

	.logo-img {
		width: $logoHeight;
		height: $logoHeight;
		padding: $logoVerticalPadding 4px;
		padding-left: 12px;
	}

	.logo-txt {
		font-size: $navFontSize;
		// box-sizing: content-box;
		// display: inline-block;
		height: $navFontSize;

		padding: $navFontVerticalPadding 12px;
	}

	.nav-list {
		margin: 0;
		display: flex;
		gap: 0;
		padding: 0;
		font-size: $navFontSize;
		list-style-type: none;

		li {
			float: left;

			a {
				color: #eee;
				padding: $navFontVerticalPadding 16px;
				text-decoration: none;

				box-sizing: content-box;
				display: inline-block;
				height: $navFontSize;

				&:hover {
					background-color: #53902b;
					color: #fff;
				}
			}
		}
	}
</style>
