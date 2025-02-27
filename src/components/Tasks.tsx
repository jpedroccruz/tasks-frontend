import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
import MenuButton from "./MenuButton";
import { Task } from "../Home";
import ConfirmDeleteTaskModal from "./ConfirmDeleteTaskModal";
import { useState } from "react";

type TasksProps = {
  tasks: Task[]
  changeTaskStatus: (id: number) => void
  deleteTaskById: (id: number) => void
}

export default function Tasks({
   tasks,
   changeTaskStatus,
   deleteTaskById
  }: TasksProps) {
  const navigate = useNavigate()
  const [isConfirmDeleteTaskModalOpen, setIsConfirmDeleteTaskModalOpen] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState<Task>()

  function getTaskDetails(id: number, title: string, description: string, status: string) {
    navigate(`/tasks/${id}?title=${title}&description=${description}&status=${status}`)
  }

  function openConfirmDeleteTaskModal() {
    setIsConfirmDeleteTaskModalOpen(true)
  }
  
  function closeConfirmDeleteTaskModal() {
    setIsConfirmDeleteTaskModalOpen(false)
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

            <button
              onClick={() => {
                setTaskToDelete(task)
                openConfirmDeleteTaskModal()
              }}
              className="bg-[#13A8FE] hover:cursor-pointer hover:bg-[#13a8fec2] transition-all duration-300 p-4 rounded-r-3xl">
              <Trash2 />
            </button>
          </div>
        </div>
      ))}
      {isConfirmDeleteTaskModalOpen &&
      <ConfirmDeleteTaskModal
        closeConfirmDeleteTaskModal={closeConfirmDeleteTaskModal}
        deleteTaskById={deleteTaskById}
        task={taskToDelete!}
      />}
    </div>
  )
}