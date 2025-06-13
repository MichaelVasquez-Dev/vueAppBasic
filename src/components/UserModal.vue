<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title class="text-h5">
        Detalles del Usuario
      </v-card-title>

      <v-card-text>
        <v-list>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-map-marker"></v-icon>
            </template>
            <v-list-item-title>Dirección</v-list-item-title>
            <v-list-item-subtitle>
              {{ user.address?.street }}, {{ user.address?.suite }}
              <br>
              {{ user.address?.city }}, {{ user.address?.zipcode }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-phone"></v-icon>
            </template>
            <v-list-item-title>Teléfono</v-list-item-title>
            <v-list-item-subtitle>{{ user.phone }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-office-building"></v-icon>
            </template>
            <v-list-item-title>Compañía</v-list-item-title>
            <v-list-item-subtitle>{{ user.company?.name }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-web"></v-icon>
            </template>
            <v-list-item-title>Sitio web</v-list-item-title>
            <v-list-item-subtitle>
              <a :href="user.website" target="_blank">{{ user.website }}</a>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="text" @click="closeDialog">
          Cerrar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'UserModal',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    dialog: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false
    }
  }
}
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style> 