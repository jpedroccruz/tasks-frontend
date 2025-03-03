import { api } from "../lib/axios";
import { Task } from "../Home";
import { toast } from "react-toastify";

type Response = {
  mensage: string
}

const notify = (status: boolean, mensage: string) => 
  status ?
  toast.success(mensage) :
  toast.error(mensage)

class Db {
  createTask(title: string, description: string) {
    api.post<Response>('/tasks', { title, description })
      .then(response => {
        const { mensage } = response.data
        notify(true, mensage)
      })
      .catch(error => {
        notify(false, error.response.data.mensage)
      })
  }

  async deleteTask(id: number) {
    api.delete<Response>(`/tasks/${id}`)
      .then(response => {
        const { mensage } = response.data
        notify(true, mensage)
      })
      .catch(error => {
        notify(false, error.response.data.mensage)
      })
  }

  async getAllTasks() {
    const response = await api.get<Task[]>('/tasks')
    const data = response.data
    return data
  }

  async updateTask(id: number, status: string) {
    api.put<Response>(`/tasks/${id}`, { status })
      .then(response => {
        const { mensage } = response.data
        notify(true, mensage)
      })
      .catch(error => {
        notify(false, error.response.data.mensage)
      }) 
  }
}

export default Db