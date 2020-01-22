import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'inicio',
		component: () =>
			import(/* webpackChunkName: "inicio" */ '../views/Inicio.view.vue')
	},
	{
		path: '/editar/:id',
		name: 'editar',
		component: () =>
			import(/* webpackChunkName: "editar" */ '../views/Editar.view.vue')
	},
	{
		path: '/agregar',
		name: 'agregar',
		component: () =>
			import(/* webpackChunkName: "editar" */ '../views/Agregar.view.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	routes
});

export default router;
