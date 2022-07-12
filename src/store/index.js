import { createStore } from 'vuex'

const store = createStore({
	state: {
		data: [],
	},
	// Para modificar el state
	mutations: {
		setData(state, newData) {
			state.data = newData
			console.log(state.data)
		},
	},
	// Realizar peticiones al servidor
	actions: {
		async getData({ commit }) {
			try {
				const res = await fetch('./../../api/data.json')
				const data = await res.json()

				commit('setData', data)
			} catch (e) {
				console.error(e)
			}
		},
	},
	modules: {},
})

export default store
