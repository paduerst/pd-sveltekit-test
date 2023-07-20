<script>
	import '../app.css';
</script>

<header class="primary-header">
	<a href="/" class="logo-anchor">
		<img src="favicon.png" alt="Petal Quest logo" aria-label="Site home" class="logo-img" />
		<span class="logo-txt">Petal Quest</span>
	</a>

	<nav class="primary-navigation">
		<ul class="nav-list">
			<li>
				<a href="/prismatic-dragons">Prismatic Dragons</a>
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
	$logoVerticalPadding: 6px;
	$totalHeaderHeight: calc($logoHeight + 2 * $logoVerticalPadding);

	$navFontSize: 16px;
	$navFontVerticalPadding: calc(0.5 * ($totalHeaderHeight - $navFontSize));

	$logoHorizontalPadding: 12px;
	$navButtonsHorizontalPadding: $logoHorizontalPadding;
	// This is a hardcoded width value, which I dislike.
	$navTextWidth: calc(131px + 107px + 42px);
	$numNavElements: 3;

	.primary-header {
		display: flex;
		align-items: center;
		background-color: rgb(28, 28, 28);
		overflow: hidden;
	}

	.logo-anchor {
		line-height: 0;
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #eee;

		&:hover {
			background-color: #53902b;
			color: #fff;
		}
	}

	.logo-img {
		height: $logoHeight;
		padding: $logoVerticalPadding $logoHorizontalPadding;
		padding-right: calc(0.5 * $logoHorizontalPadding);
	}

	.logo-txt {
		font-size: $navFontSize;
		white-space: nowrap;
		padding: $navFontVerticalPadding $logoHorizontalPadding;
		padding-left: calc(0.5 * $logoHorizontalPadding);
	}

	.primary-navigation {
		display: flex;
		margin-left: auto;
		margin-right: 0;
	}

	.nav-list {
		margin: 0;
		padding: 0;
		font-size: $navFontSize;
		list-style-type: none;

		li {
			float: left;

			a {
				color: #eee;
				padding: $navFontVerticalPadding $navButtonsHorizontalPadding;
				text-decoration: none;
				white-space: nowrap;

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
