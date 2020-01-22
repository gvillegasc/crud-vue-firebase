import Vue from 'vue';
import Vuex from 'vuex';
import db from '../firebase/firebase'; // Importacion del firebase
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tareas: [],
		tarea: { nombre: '', id: '' }
	},
	mutations: {
		setTareas(state, tareas) {
			state.tareas = tareas;
		},
		setTarea(state, tarea) {
			state.tarea = tarea;
		},
		eliminarTareaLista(state, id) {
			state.tareas = state.tareas.filter(doc => {
				return doc.id != id;
			});
		}
	},
	actions: {
		// Obtener todas las tareas
		getTareas({ commit }) {
			const tareas = [];
			db.collection('tareas')
				.get()
				.then(snapshot => {
					snapshot.forEach(doc => {
						let tarea = doc.data();
						tarea.id = doc.id;
						tareas.push(tarea);
					});
				});
			commit('setTareas', tareas);
		},
		// Obtener 1 tarea mediante el id
		getTarea({ commit }, id) {
			db.collection('tareas')
				.doc(id)
				.get()
				.then(doc => {
					let tarea = doc.data();
					tarea.id = doc.id;
					commit('setTarea', tarea);
				});
		},
		// Editar tarea
		editarTarea({ commit }, tarea) {
			db.collection('tareas')
				.doc(tarea.id)
				.update({
					nombre: tarea.nombre
				})
				.then(() => {
					router.push({ name: 'inicio' });
				});
		},
		// Crear tarea
		crearTarea({ commit }, nombre) {
			db.collection('tareas')
				.add({
					nombre: nombre
				})
				.then(doc => {
					console.log(doc.id);
					router.push({ name: 'inicio' });
				});
		},
		// Eliminar tarea
		eliminarTarea({ commit, dispatch }, id) {
			db.collection('tareas')
				.doc(id)
				.delete()
				.then(() => {
					console.log('Tarea eliminada');
					commit('eliminarTareaLista', id); // para eliminar de la lista
				});
		}
	},
	modules: {}
});
