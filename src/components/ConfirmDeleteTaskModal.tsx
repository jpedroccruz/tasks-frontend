import { X } from "lucide-react";
import BlueContainer from "./BlueContainer";
import ConfirmButton from "./ConfirmButton";
import { Task } from "../Home";

type ConfirmDeleteTaskModalProps = {
  closeConfirmDeleteTaskModal: () => void
  deleteTaskById: (taskId: number) => void
  task: Task
}

export default function ConfirmDeleteTaskModal({
   closeConfirmDeleteTaskModal,
   deleteTaskById,
   task
  }: ConfirmDeleteTaskModalProps) {
  return (
   <div className="h-full w-full top-0 left-0 bg-[#000000a7] flex justify-center items-center absolute" >
      <div className="max-w-[566px]">
        <BlueContainer as={'div'}>
          <div className="flex justify-between w-full">
            <span className="text-[20px] font-semibold">Delete Task</span>
            <button onClick={closeConfirmDeleteTaskModal} className="cursor-pointer" >
              <X size={30} />
            </button>
          </div>
          <div className="flex flex-col bg-white p-6 w-full rounded-3xl gap-6">
            <p className="text-2xl text-[#000017]">Confirm task exclusion:Study TypeScript</p>
            <div className="flex justify-between gap-2">
              <ConfirmButton onClick={() => {
                deleteTaskById(task.id)
                closeConfirmDeleteTaskModal()
              }} >
                Yes
              </ConfirmButton>
              <ConfirmButton color="red" onClick={closeConfirmDeleteTaskModal} >No</ConfirmButton>
            </div>
          </div>
        </BlueContainer>
      </div>
   </div>
 )
}