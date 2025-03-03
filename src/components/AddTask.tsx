import { FormEvent, useState } from "react"
import Input from "./Input"
import BlueContainer from "./BlueContainer"

type AddTaskProps = {
  createNewTask: (title: string, description: string) => void
}

export default function AddTask({ createNewTask }: AddTaskProps) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")

  return (
    <BlueContainer
      as={'form'}
      onSubmit={(event: FormEvent<HTMLElement>) => {
        event.preventDefault()
        createNewTask(title, description)
        setTitle("")
        setDescription("")
      }} >
      <div className="w-full flex flex-col gap-11">
        <Input name="taskTitle" placeholder="Nome da Tarefa" value={title} setState={setTitle} />
        <Input name="taskDescription" placeholder="Descrição da Tarefa" value={description} setState={setDescription} />
      </div>

      <button 
        className="w-full h-12 bg-[#000117] text-white text-2xl rounded-3xl hover:cursor-pointer hover:bg-[#000117d6] transition-all duration-300">
        Create Task
      </button>
    </BlueContainer>
  )
}