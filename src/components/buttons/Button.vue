<template>
	<button
		:type="_type"
		:class="`btn ${_class}`"
		:style="{
			height: _styles.height,
			width: _styles.width,
			borderRadius: _styles.borderRadius ?? '4px',
		}"
	>
		{{ _text }}
	</button>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			_type: {
				type: String,
				default: 'button',
				required: false,
			},
			_class: {
				type: String,
				default: 'green',
				required: false,
			},
			_text: {
				type: String,
				default: 'Click me',
				required: false,
			},
			_styles: {
				type: Object,
				required: false,
			},
		},
		methods: {
			rippleEffect(e) {
				e.preventDefault()
				// Create a span element
				const overlay = document.createElement('span')
				overlay.classList.add('overlay')
				// Control
				const x = e.clientX - e.target.offsetLeft
				const y = e.clientY - e.target.offsetTop
				// Set
				overlay.style.left = `${x}px`
				overlay.style.top = `${y}px`
				// Push
				e.target.appendChild(overlay)
				// Remove
				setTimeout(() => {
					overlay.remove()
				}, 588)
			},
		},
	}
</script>

<style>
	.btn {
		display: inline-block;
		position: relative;
		color: #dfece5;
		background-color: #00a88b;
		overflow: hidden;
		margin-top: 5%;
		margin-left: 5%;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 15px;
		padding-right: 15px;
		border-radius: 4px;
		transition: color 488ms ease-in-out,
			background-color 488ms ease-in-out;
		cursor: pointer;
	}
	.btn:hover {
		opacity: 0.88;
	}
	.btn > span.overlay {
		position: absolute;
		height: 888px;
		width: 888px;
		top: 0;
		left: 0;
		border-radius: 100%;
		background-color: rgba(255, 255, 255, 0.38);
		transform: translate(-50%, -50%);
		opacity: 0.4;
		animation: rippleEffect 0.5s ease-in-out infinite;
	}
	@keyframes rippleEffect {
		from {
			height: 0;
			width: 0;
			opacity: 0.4;
		}
		to {
			height: 200px;
			width: 200px;
			opacity: 0;
		}
	}
</style>
