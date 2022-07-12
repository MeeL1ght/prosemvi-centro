<template>
	<Navbar />
	<div class="container first">
		<h1 class="title">Proyecto Prosemvi</h1>
		<section class="container main">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
				eius recusandae eum asperiores? Quam veritatis culpa est dicta
				dolor molestias ea corrupti fuga itaque dignissimos facilis
				illo, doloremque temporibus officia!
			</p>
			<img
				src="./../assets/images/prueba.png"
				alt="prueba"
				class="prueba"
			/>
		</section>
	</div>
	<!-- <h3>{{ data.age }}</h3> -->
	<!-- <button-icon
		:_styles="{
			height: '38px',
			width: '125px',
		}"
		:_icon="{
			name: 'add',
			fontSize: '18px' /* 'right' | 'left' */,
			/* position: 'left' */
		}"
	/> -->
</template>

<script>
	import { useStore } from 'vuex'
	import { computed, onMounted } from 'vue'
	import Navbar from '@/components/navbar/Navbar.vue'
	import Button from '@/components/buttons/Button.vue'
	import ButtonIcon from '@/components/buttons/ButtonIcon.vue'

	export default {
		name: 'Home',
		components: {
			Navbar,
			Button,
			ButtonIcon,
		},
		setup() {
			const store = useStore()

			onMounted(() => {
				store.dispatch('getData')
			})

			const data = computed(() => store.state.data)

			return { data }
		},
	}
</script>

<style scoped>
	.container.first {
		position: relative;
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: max-content;
		width: 95.5%;
		margin-top: 8%;
		margin-left: 2.2%;
		color: #a4d4c1;
	}
	.container.main {
		display: flex;
		align-items: center;
		font-size: 27px;
		margin-left: 50px;
		margin-right: 50px;
	}
	.title {
		position: absolute;
		top: 18%;
		left: 4%;
		font-size: 46px;
		border-bottom: 2px solid #82d4ae;
		color: #8bdbc1;
		font-weight: bold;
	}
	.prueba {
		height: 600px;
	}
</style>
