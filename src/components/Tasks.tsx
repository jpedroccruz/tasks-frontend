import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
import MenuButton from "./MenuButton";
import { Task } from "../Home";

type TasksProps = {
  tasks: Task[]
  deleteTaskById: (id: number) => void
  changeTaskStatus: (id: number) => void
}

export default function Tasks({ tasks, deleteTaskById, changeTaskStatus }: TasksProps) {
  const navigate = useNavigate()

  function getTaskDetails(id: number, title: string, description: string, status: string) {
    navigate(`/tasks/${id}?title=${title}&description=${description}&status=${status}`)
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {tasks.map(task => (
        <div key={task.id} className="bg-white flex justify-between items-center h-[56px] rounded-3xl pl-4">
          <span
            onClick={() => changeTaskStatus(task.id)}
            className={`text-[20px] text-[#000117] hover:cursor-pointer ${task.status === 'completed' && 'line-through'}`}>{`#${task.id} | ${task.title}`}
          </span>

          <div className="flex items-center gap-4">
            <MenuButton getTaskDetails={getTaskDetails} task={task} />

            <button onClick={() => deleteTaskById(task.id)} className="bg-[#13A8FE] hover:cursor-pointer hover:bg-[#13a8fec2] transition-all duration-300 p-4 rounded-r-3xl">
              <Trash2 />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}