<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from './components/layout/AppLayout.vue'

export default {
  name: 'App',
  components: {
    AppLayout
  }
}
</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
}

/* Ajustes para dispositivos móviles */
@media (max-width: 600px) {
  .v-container {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
}
</style>
