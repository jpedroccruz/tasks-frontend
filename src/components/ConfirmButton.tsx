type ConfirmButtonProps = {
  onClick: () => void
  color?: string
  children: React.ReactNode
}

export default function ConfirmButton({ onClick, color, children }: ConfirmButtonProps) {
 return (
  <button
    className={`cursor-pointer ${color === 'red' ? 'bg-red-700' : 'bg-green-700'} flex-1/2 rounded-3xl font-semibold text-[20px]`}
    onClick={onClick}
    >
    {children}
  </button>
 );
}