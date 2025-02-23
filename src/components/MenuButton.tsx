import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { Task } from "../Home"

type MenuButtonProps = {
  getTaskDetails: (id: number, title: string, description: string, status: string) => void,
  task: Task
}

export default function MenuButton({ getTaskDetails, task}: MenuButtonProps) {
  const [ width, setWidth ] = useState<number>()

  useEffect(() => {
    setWidth(window.innerWidth)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth])

  return (
    <button
      onClick={() => getTaskDetails(task.id, task.title, task.description, task.status)}
      className="text-[20px] text-[#000117] hover:cursor-pointer">
      {width! > 768 ? <p>Detalhes</p> : <Menu /> }
    </button>
  )
}