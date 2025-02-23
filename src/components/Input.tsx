type InputProps = {
  name: string,
  placeholder: string,
  value: string,
  setState: (value: React.SetStateAction<string>) => void
}

export default function Input({
  name,
  placeholder,
  value,
  setState
}: InputProps) {
  return (
    <input
      type="text"
      name={name}
      className="bg-white h-12 w-full placeholder:text-[#000117ae] px-4 rounded-3xl text-[20px] outline-blue-300"
      placeholder={placeholder}
      value={value}
      onChange={event => setState(event.target.value)}
    />
  )
}