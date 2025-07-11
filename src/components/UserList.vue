<template>
  <div>
    <v-row>
      <v-col cols="12" md="8" lg="6" class="mx-auto">
        <SearchBar @search="filterUsers" />
      </v-col>
    </v-row>
    
    <v-container>
      <v-row v-if="loading">
        <v-col cols="12" class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
            size="64"
          ></v-progress-circular>
          <div class="mt-4">Cargando usuarios...</div>
        </v-col>
      </v-row>

      <v-row v-else-if="error">
        <v-col cols="12" md="8" lg="6" class="mx-auto">
          <v-alert
            type="error"
            variant="tonal"
            class="mx-auto"
          >
            {{ error }}
          </v-alert>
        </v-col>
      </v-row>

      <template v-else>
        <v-row v-if="filteredUsers.length === 0">
          <v-col cols="12" md="8" lg="6" class="mx-auto">
            <v-alert
              type="info"
              variant="tonal"
              class="mx-auto"
            >
              No se encontraron usuarios que coincidan con la búsqueda
            </v-alert>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col
            v-for="user in filteredUsers"
            :key="user.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="d-flex"
          >
            <UserCard
              :user="user"
              @show-details="showUserDetails"
              class="flex-grow-1"
            />
          </v-col>
        </v-row>
      </template>
    </v-container>

    <UserModal
      v-model="showModal"
      :user="selectedUser"
    />
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import UserCard from './UserCard.vue'
import UserModal from './UserModal.vue'
import { userService } from '@/services/userService'

export default {
  name: 'UserList',
  components: {
    SearchBar,
    UserCard,
    UserModal
  },
  data() {
    return {
      users: [],
      filteredUsers: [],
      showModal: false,
      selectedUser: null,
      loading: false,
      error: null
    }
  },
  async created() {
    await this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      this.loading = true
      this.error = null
      try {
        this.users = await userService.getUsers()
        this.filteredUsers = this.users
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    filterUsers(query) {
      if (!query) {
        this.filteredUsers = this.users
        return
      }
      const searchTerm = query.toLowerCase()
      this.filteredUsers = this.users.filter(user => 
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
      )
    },
    showUserDetails(user) {
      this.selectedUser = user
      this.showModal = true
    }
  }
}
</script>

<style scoped>
.v-col {
  transition: all 0.3s ease;
}
</style> 