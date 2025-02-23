import { api } from "../lib/axios";

class Db {
   async createTask(title: string, description: string) {
    api.post('/tasks', {
      title, description 
    })
  }

  async deleteTask(id: number) {
    api.delete(`/tasks/${id}`)
  }

  async getAllTasks() {
    const response = await api.get('/tasks')
    const data = response.data
    return data
  }

  async updateTask(id: number, status: string) {
    api.put(`/tasks/${id}`, {
      status
    })
  }
}

export default Db