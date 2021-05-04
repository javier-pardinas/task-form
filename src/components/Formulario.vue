<template>
  <div class="formulario">
    <!--we loop through those posts that we get from our api and display their info:-->
    <div v-for='form in forms' :key='form.id'>
        <h1>{{form.titulo}}</h1>
        <h6>Orden: {{form.orden}} </h6>
        <h6>Fecha última revisión: {{form.fecha_ultima_revision}}</h6>
        <h6>Resumen:</h6>
        <p>{{form.resumen}}</p>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'FetchPosts',
  computed: {
    //forms from the state of store:
    forms() {
    return this.$store.state.forms
    }
  },
  mounted() {
    //dispatch the action fetchForms() that gets forms from strapi and commits the set_forms() mutation:
    this.$store.dispatch("fetchForms");
  }
}
</script> 
