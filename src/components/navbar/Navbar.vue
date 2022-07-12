<template>
	<header class="header">
		<a
			href="#"
			class="nav-link-logo"
		>
			<img
				src="./../../assets/images/prosemvi-logo.png"
				alt="logo"
				class="logo"
			/>
			<h3 class="nav-text-logo">Prosemvi</h3>
		</a>
		<nav class="navbar">
			<ul class="nav-list">
				<li class="nav-item">
					<a
						href="#"
						class="nav-link"
						>Inicio</a
					>
				</li>
				<li class="nav-item">
					<a
						href="#"
						class="nav-link nav-link-icon planillas-item"
					>
						Planillas
						<ion-icon
							name="list"
							id="list-icon"
						></ion-icon>
					</a>
				</li>
				<li class="nav-item">
					<a
						href="#"
						class="nav-link nav-link-icon informacion-item"
					>
						Info
						<ion-icon
							name="stats"
							id="stats-icon"
						></ion-icon>
					</a>
				</li>
				<li class="nav-item">
					<a
						href="#"
						class="nav-link nav-link-icon last-item"
					>
						Ayuda
						<ion-icon
							name="help-circle-outline"
							id="help-icon"
						></ion-icon>
					</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		name: 'Navbar',
	}
</script>

<style scoped>
	.header {
		position: fixed;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 65px;
		width: 100%;
		z-index: 10;
		background: rgba(42, 112, 73, 0.2);
		box-shadow: 0 4px 20px rgba(41, 121, 106, 0.3);
		backdrop-filter: blur(22px);
		user-select: none;
		/* border: 1px solid rgba(255, 255, 255, 0.3); */
	}
	.nav-link-logo {
		display: flex;
		align-items: center;
		height: 48px;
		margin-left: 5%;
	}
	.logo {
		height: 60px;
		width: 66px;
		filter: brightness(112%);
		/* transition: filter 588ms ease-in-out; */
	}
	.nav-text-logo {
		font-weight: bold;
		color: #96c7b3;
		letter-spacing: 0.8px;
		transition: opacity 588ms ease-in-out;
	}
	/* .logo:hover {
		filter: hue-rotate(8.8deg);
	} */
	.nav-text-logo:hover {
		opacity: 0.8;
	}
	/** List and items */
	.nav-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: max-content;
		margin-right: 150px;
	}
	.nav-link {
		margin-right: 50px;
	}
	.nav-item,
	.nav-link {
		letter-spacing: 0.1px;
		font-weight: 200;
		text-transform: capitalize;
	}
	.nav-item,
	.nav-link {
		font-size: 1.03em;
		color: #a4d4c1;
		transition: opacity 508ms ease-in-out;
	}
	.nav-item:hover,
	.nav-link:hover {
		opacity: 0.85;
	}

	.nav-link-icon {
		display: flex;
		align-items: center;
		color: #a4d4c1;
		transition: color 508ms ease-in-out;
	}
	.nav-link-icon.last-item {
		margin-right: 0;
	}
	#list-icon,
	#stats-icon,
	#help-icon {
		font-size: 1.22em;
		margin-left: 3.8px;
	}
	#stats-icon,
	#help-icon {
		transition: transform 300ms ease-in-out;
	}
	#list-icon {
		transition: transform 500ms ease-in-out;
	}
	#list-icon:hover {
		transform: translate(3px, 0);
	}
	#stats-icon:hover {
		transform: scale(0.8);
	}
	#help-icon:hover {
		transform: rotate(25deg);
	}
	.nav-link-icon.planillas-item:hover,
	.nav-link-icon.informacion-item:hover,
	.nav-link-icon.last-item:hover {
		opacity: 1;
	}
	.nav-link-icon.planillas-item:hover {
		color: #94e1eb;
	}
	.nav-link-icon.informacion-item:hover {
		color: #5ad374;
	}
	.nav-link-icon.last-item:hover {
		color: #d4c673;
	}
</style>
