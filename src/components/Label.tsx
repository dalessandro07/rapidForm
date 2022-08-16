interface Props {
  title: string
  placeholder: string
  deleteLabel: (name: string) => void
}

const Label = ({ title, placeholder, deleteLabel }: Props) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="font-bold">{title}</p>

        <button type="button" onClick={() => deleteLabel(title)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      <textarea
        name={title}
        className="form-textarea min-h-[300px] rounded-lg border border-gray-300 px-2 py-1"
        placeholder={placeholder}
        cols={30}
      />
    </section>
  )
}

export default Label
