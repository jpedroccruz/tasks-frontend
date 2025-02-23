import { api } from "../lib/axios"

export default async function getAllTasks() {
  const response = await api.get('/tasks')
  const data = response.data
  return data
}