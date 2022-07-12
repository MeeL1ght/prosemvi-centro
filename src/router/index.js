import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		// meta: {
		// 	requiresAuth: false,
		// 	title: 'Home',
		// },
		// meta: {
		// 	title: 'Home Page',
		// },
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
