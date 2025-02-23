import { ChevronLeft } from "lucide-react"
import { useSearchParams } from "react-router"
import Title from "../components/Title"
import BlueContainer from "../components/BlueContainer"

export default function TaskDetails() {
  const [ searchParams ] = useSearchParams()
  
  const status = searchParams.get('status') === 'pending' ? 'PENDENTE' : 'CONCLUíDA'

  return (
    <div className="h-dvh bg-[#000117] flex flex-col items-center">
      <div className="flex flex-col py-8 gap-8 w-96 md:w-[566px]">
        <Title>Descrição da tarefa: {searchParams.get('title')}</Title>
        <BlueContainer as={'div'}>
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
        </BlueContainer>
      </div>
    </div>
  )
}