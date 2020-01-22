<template>
  <div class="animated fadeIn">
    <h1>Lista de tareas</h1>

    <router-link :to="{name:'agregar'}">
      <button type="submit" class="btn btn-success btn-block">Agregar</button>
    </router-link>

    <ul class="list-group mt-5">
      <li v-for="tarea of tareas" :key="tarea.id" class="list-group-item">
        {{tarea.id}} - {{tarea.nombre}}
        <div class="float-right">
          <router-link :to="{name: 'editar', params: {id:tarea.id}}">
            <button class="btn btn-warning mr-2">Editar</button>
          </router-link>
          <button @click="eliminarTarea(tarea.id)" class="btn btn-danger">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// Importaciones
import { mapActions, mapState } from "vuex";
export default {
  name: "Inicio",
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"])
  },
  created() {
    this.getTareas();
  },
  computed: {
    ...mapState(["tareas"])
  }
};
</script>