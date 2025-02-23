import { ChevronLeft } from "lucide-react"
import { useSearchParams } from "react-router"

export default function TaskDetails() {
  const [ searchParams ] = useSearchParams()
  
  const status = searchParams.get('status') === 'pending' ? 'PENDENTE' : 'CONCLUíDA'

  return (
    <div className="h-dvh bg-[#000117] flex flex-col items-center py-8 gap-8">
      <div className="h-dvh bg-[#000117] flex flex-col items-center py-8 gap-8 w-96 md:w-[566px]">
        <h1 className="text-white text-center font-semibold text-4xl">Descrição da tarefa: {searchParams.get('title')}</h1>
        <div className="bg-[#13A8FE] w-full rounded-3xl flex flex-col justify-center items-center gap-7 p-8" >
          <div className="w-full flex justify-between">
            <a href="/" className="flex place-self-start items-center">
              <ChevronLeft />
              <p className="text-[#000017] font-semibold text-[20px]">Voltar</p>
            </a>

            <p className="font-semibold text-[20px]">
              STATUS: <span className={`${status === 'PENDENTE' ? 'text-red-800' : 'text-green-800'}`}>{status}</span>
            </p>
          </div>
          <div className="bg-white p-6 w-full rounded-3xl">
            <p className="text-2xl text-[#000017]">{searchParams.get('description')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}