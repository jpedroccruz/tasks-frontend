import { ChevronLeft } from "lucide-react"

export default function TaskDetails() {
  return (
    <div className="h-dvh bg-[#000117] flex flex-col items-center py-8 gap-8">
      <div className="h-dvh bg-[#000117] flex flex-col items-center py-8 gap-8 w-96 md:w-[566px]">
        <h1 className="text-white font-semibold text-4xl">Descrição da tarefa: Limpar o PC</h1>
        <div className="bg-[#13A8FE] w-full rounded-3xl flex flex-col justify-center items-center gap-7 p-8" >
          <a href="/" className="flex place-self-start items-center">
            <ChevronLeft />
            <p className="text-[#000017] font-semibold text-[20px]">Voltar</p>
          </a>
          <div className="bg-white p-6 w-full rounded-3xl">
            <p className="text-2xl text-[#000017]">Trocar a pasta térmica e tirar a poeira dos componentes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}