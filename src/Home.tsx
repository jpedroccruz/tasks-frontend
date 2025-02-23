import { useEffect, useState } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import getAllTasks from "./db/getAllTasks"
import createTask from "./db/createTask"
import deleteTask from "./db/deleteTask"
import updateTask from "./db/updateTask"

type Task = {
  id: number,
  title: string,  
  description: string,
  status: string
}

export default function Home() {
  const [ tasks, setTasks ] = useState<Task[]>([])

  useEffect(() => {
    getAllTasks().then(data => setTasks(data))
  }, [tasks])

  function createNewTask(title: string, description: string) {
    createTask(title, description)
    setTasks(tasks)
  }

  function deleteTaskById(id: number) {
    deleteTask(id)
    setTasks(tasks)
  }

  function changeTaskStatus(id: number) {
    const task = tasks.find(task => task.id === id)
    if (task?.status === 'pending') {
      updateTask(id, 'completed')
    } else {
      updateTask(id, 'pending')
    }
  }

  return (
    <div className="h-dvh bg-[#000117] flex flex-col items-center py-8 gap-8">
      <div className="h-dvh bg-[#000117] flex flex-col items-center py-8 gap-8 w-96 md:w-[566px]">
        <h1 className="text-white font-semibold text-4xl">Lista de Tarefas</h1>
        <AddTask createNewTask={createNewTask} />
        <Tasks tasks={tasks} deleteTaskById={deleteTaskById} changeTaskStatus={changeTaskStatus} />
      </div>
    </div>
  )
}