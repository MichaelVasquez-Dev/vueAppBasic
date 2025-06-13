<template>
  <v-footer app class="bg-grey-lighten-3">
    <v-container>
      <div class="text-center w-100">
        © {{ new Date().getFullYear() }} - Lista de Usuarios
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script> 