type TitleProps = {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="text-white text-center font-semibold text-4xl">
      {children}
    </h1>
  )
}