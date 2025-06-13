<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container class="py-4">
        <slot></slot>
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
}

@media (max-width: 600px) {
  .v-container {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
}
</style> 