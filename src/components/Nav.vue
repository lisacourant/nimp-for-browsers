<template>
	<div class="nav-bar">
		<ul>
			<li><span>Edition</span></li>
			<li><span>Gestion</span></li>
			<li><span>Journal</span></li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	.nav-bar {
		position: fixed;
		z-index: 500;
		top: 150px;
		left: 0;
		width: 100%;
		background: #444;
		border: 1px solid white;
		text-align: center;
		padding: 10px;
		color: #fff;
	}
	
	.nav-bar ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	
	.nav-bar li {
		float: left;
	}
	
	.nav-bar li span {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}
</style>
