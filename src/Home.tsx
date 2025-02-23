import { useEffect, useState } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Db from "./db/db"

type Task = {
  id: number,
  title: string,  
  description: string,
  status: string
}

export default function Home() {
  const [ tasks, setTasks ] = useState<Task[]>([])

  useEffect(() => {
    db.getAllTasks().then(data => setTasks(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks])

  const db = new Db

  function createNewTask(title: string, description: string) {
    db.createTask(title, description)
    setTasks(tasks)
  }

  function deleteTaskById(id: number) {
    db.deleteTask(id)
    setTasks(tasks)
  }

  function changeTaskStatus(id: number) {
    const task = tasks.find(task => task.id === id)
    if (task?.status === 'pending') {
      db.updateTask(id, 'completed')
    } else {
      db.updateTask(id, 'pending')
    }
  }

  return (
    <div className="h-dvh bg-[#000117] flex flex-col items-center py-8 gap-8">
      <div className="h-dvh bg-[#000117] flex flex-col items-center py-8 gap-8 w-96 md:w-[566px]">
        <h1 className="text-white text-center font-semibold text-4xl">Lista de Tarefas</h1>
        <AddTask createNewTask={createNewTask} />
        <Tasks tasks={tasks} deleteTaskById={deleteTaskById} changeTaskStatus={changeTaskStatus} />
      </div>
    </div>
  )
}