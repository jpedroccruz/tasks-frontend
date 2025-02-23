import { useState } from "react"

type AddTaskProps = {
  createNewTask: (title: string, description: string) => void
}

export default function AddTask({ createNewTask }: AddTaskProps) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")

  return (
    <form
    onSubmit={() => {
      createNewTask(title, description)
      setTitle("")
      setDescription("")
    }} 
    className="bg-[#13A8FE] w-full rounded-3xl flex flex-col justify-center items-center gap-7 p-8" >
      <div className="w-full flex flex-col gap-11">
        <input
          type="text"
          name="taskTitle"
          className="bg-white h-12 w-full placeholder:text-[#000117ae] px-4 rounded-3xl text-[20px] outline-blue-300"
          placeholder="Nome da Tarefa"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="text"
          name="taskDescription"
          className="bg-white h-12 w-full placeholder:text-[#000117ae] px-4 rounded-3xl text-[20px] outline-blue-300"
          placeholder="Descrição da Tarefa"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </div>

      <button 
        className="w-full h-12 bg-[#000117] text-white text-2xl rounded-3xl hover:cursor-pointer hover:bg-[#000117d6] transition-all duration-300">
        Criar tarefa
      </button>
    </form>
  )
}