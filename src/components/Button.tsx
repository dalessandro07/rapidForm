type Color = 'blue' | 'green' | 'red' | 'indigo'
type Icons = 'send' | 'add' | 'remove'

type DictIcons = {
  [key in Icons]?: JSX.Element
}

interface Props {
  isValid?: boolean
  color: Color
  children: React.ReactNode
  icon?: Icons
  type?: 'submit' | 'button'
}

const Button = ({ isValid, color, children, icon, type }: Props) => {
  const defaultColors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    indigo: 'bg-indigo-500'
  }

  const icons: DictIcons = {
    send: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    ),
    add: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    )
  }

  const bgColor = defaultColors[color] || 'bg-gray-500'

  return (
    <button
      className={`${
        isValid
          ? 'cursor-not-allowed bg-gray-500'
          : `${bgColor} group transition-all duration-150 hover:scale-105`
      } flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-white`}
      disabled={isValid}
      type={type || 'button'}>
      <i className="group-hover:animate-spin">{icons && icon ? icons[icon] : ''}</i>

      <p>{children}</p>
    </button>
  )
}

export default Button
