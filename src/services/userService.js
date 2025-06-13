const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const userService = {
  async getUsers() {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error('Error al cargar los usuarios')
      }
      return await response.json()
    } catch (error) {
      console.error('Error en userService.getUsers:', error)
      throw error
    }
  }
} 