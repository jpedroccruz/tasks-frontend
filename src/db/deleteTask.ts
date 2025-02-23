import { api } from "../lib/axios";

export default async function deleteTask(id: number) {
  api.delete(`/tasks/${id}`)
}