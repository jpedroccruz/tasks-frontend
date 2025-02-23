import { api } from "../lib/axios";

export default async function updateTask(id: number, status: string) {
  api.put(`/tasks/${id}`, {
    status
  })
}