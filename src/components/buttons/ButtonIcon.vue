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
		<div class="icon-text-setup">
			<!-- Ionicon - Left -->
			<ion-icon
				v-if="
					_icon !== null ||
					_icon.position === '' ||
					(_icon.position === 'right' && _text !== '')
				"
				:name="_icon.name"
				:style="{
					fontSize: _icon.fontSize ?? '1em',
					color: _icon.color ?? '#dfece5',
				}"
			></ion-icon>
			<!-- Text -->
			<span
				:style="
					_icon.position === 'left' ? { marginLeft: '2.80px' } : {}
				"
				>{{ _text }}</span
			>
			<!-- Ionicon - Left -->
			<ion-icon
				v-if="
					_icon !== null && _icon.position === 'left' && _text !== ''
				"
				:name="_icon.name"
				:style="{
					fontSize: _icon.fontSize ?? '1em',
					color: _icon.color ?? '#dfece5',
					marginLeft: '2.80px',
				}"
			></ion-icon>
		</div>
	</button>
</template>

<script>
	export default {
		name: 'ButtonIcon',
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
			_icon: {
				type: Object,
				default: {},
				required: false,
			},
			_text: {
				type: String,
				default: '',
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
				let x = e.clientX - e.target.offsetLeft
				let y = e.clientY - e.target.offsetTop
				// Set
				overlay.style.left = `${x}px`
				overlay.style.top = `${y}px`
				// Push
				e.target.appendChild(overlay)
				// Remove
				setTimeout(() => {
					overlay.remove()
				}, 528)
			},
		},
	}
</script>

<style scoped>
	.icon-text-setup {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
