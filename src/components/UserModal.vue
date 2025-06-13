<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
    transition="dialog-bottom-transition"
    :scrim="true"
    :persistent="false"
  >
    <v-card class="modal-card">
      <v-card-title class="text-h5 pa-4">
        <v-icon icon="mdi-account" class="mr-2"></v-icon>
        Detalles del Usuario
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-4">
        <v-list class="bg-transparent">
          <v-list-item class="mb-2">
            <template v-slot:prepend>
              <v-icon icon="mdi-map-marker" color="primary"></v-icon>
            </template>
            <v-list-item-title class="text-subtitle-1 font-weight-medium">Dirección</v-list-item-title>
            <v-list-item-subtitle class="mt-1">
              {{ user.address?.street }}, {{ user.address?.suite }}
              <br>
              {{ user.address?.city }}, {{ user.address?.zipcode }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item class="mb-2">
            <template v-slot:prepend>
              <v-icon icon="mdi-phone" color="primary"></v-icon>
            </template>
            <v-list-item-title class="text-subtitle-1 font-weight-medium">Teléfono</v-list-item-title>
            <v-list-item-subtitle class="mt-1">{{ user.phone }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item class="mb-2">
            <template v-slot:prepend>
              <v-icon icon="mdi-office-building" color="primary"></v-icon>
            </template>
            <v-list-item-title class="text-subtitle-1 font-weight-medium">Compañía</v-list-item-title>
            <v-list-item-subtitle class="mt-1">{{ user.company?.name }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-web" color="primary"></v-icon>
            </template>
            <v-list-item-title class="text-subtitle-1 font-weight-medium">Sitio web</v-list-item-title>
            <v-list-item-subtitle class="mt-1">
              <a :href="user.website" target="_blank" class="text-decoration-none">
                {{ user.website }}
                <v-icon icon="mdi-open-in-new" size="small" class="ml-1"></v-icon>
              </a>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          variant="text"
          @click="closeDialog"
          class="px-4"
        >
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
.modal-card {
  border-radius: 8px;
}

.v-list-item {
  transition: all 0.3s ease;
}

.v-list-item:hover {
  background-color: rgba(var(--v-theme-primary), 0.05);
  border-radius: 4px;
}

a {
  color: rgb(var(--v-theme-primary));
  transition: opacity 0.3s ease;
}

a:hover {
  opacity: 0.8;
}

.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.3s ease-in-out;
}

.dialog-bottom-transition-enter-from,
.dialog-bottom-transition-leave-to {
  transform: translateY(100%);
}
</style> 