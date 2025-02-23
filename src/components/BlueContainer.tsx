import { ElementType, FormEventHandler } from "react"

type BlueContainerProps = {
  as: ElementType,
  children: React.ReactNode,
  onSubmit?: FormEventHandler<HTMLFormElement>,
}

export default function BlueContainer({ as: Tag, children, onSubmit }: BlueContainerProps) {
  return (
    <Tag 
      onSubmit={onSubmit} className="bg-[#13A8FE] w-full rounded-3xl flex flex-col justify-center items-center gap-7 p-8" >
      {children}
    </Tag>
  )
}