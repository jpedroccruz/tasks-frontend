import { api } from "../lib/axios";

export default async function createTask(title: string, description: string) {
  api.post('/tasks', {
    title, description 
  })
}