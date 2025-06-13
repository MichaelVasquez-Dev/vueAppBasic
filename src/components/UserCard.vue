<template>
  <v-card class="h-100" elevation="2" :class="{ 'on-hover': hover }" @mouseenter="hover = true" @mouseleave="hover = false">
    <v-card-item>
      <template v-slot:prepend>
        <v-avatar color="primary" size="64" class="elevation-2">
          <v-img :src="`https://i.pravatar.cc/150?u=${user.email}`" alt="User avatar"></v-img>
        </v-avatar>
      </template>
      <v-card-title class="text-truncate">{{ user.name }}</v-card-title>
      <v-card-subtitle class="text-truncate">{{ user.email }}</v-card-subtitle>
    </v-card-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        variant="text"
        @click="$emit('show-details', user)"
        :class="{ 'scale-up': hover }"
      >
        Ver más
        <v-icon end icon="mdi-chevron-right" class="ml-1"></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style scoped>
.v-card {
  transition: all 0.3s ease;
}

.v-card.on-hover {
  transform: translateY(-5px);
}

.scale-up {
  transition: transform 0.3s ease;
}

.scale-up:hover {
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .v-card-title {
    font-size: 1rem !important;
  }
  
  .v-card-subtitle {
    font-size: 0.875rem !important;
  }
}
</style> 