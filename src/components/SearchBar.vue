<template>
  <v-container>
    <v-text-field
      v-model="searchQuery"
      label="Buscar usuarios por nombre o email"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      @input="onSearch"
      clearable
      hide-details="auto"
      class="mb-4"
      :loading="loading"
    >
      <template v-slot:append>
        <v-fade-transition leave-absolute>
          <v-progress-circular
            v-if="loading"
            size="24"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-fade-transition>
      </template>
    </v-text-field>
  </v-container>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: '',
      loading: false,
      searchTimeout: null
    }
  },
  methods: {
    onSearch() {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout)
      }
      
      this.loading = true
      this.searchTimeout = setTimeout(() => {
        this.$emit('search', this.searchQuery)
        this.loading = false
      }, 300)
    }
  }
}
</script> 