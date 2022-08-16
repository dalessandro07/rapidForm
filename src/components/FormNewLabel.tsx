import type { LabelType } from '../env'
import Button from './Button'

interface Props {
  labels: LabelType[]
  setLabels: (labels: LabelType[]) => void
  isValid: boolean
  setIsValid: (isValid: boolean) => void
}

const FormNewLabel = ({ labels, setLabels, isValid, setIsValid }: Props) => {
  const addNewLabel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = JSON.parse(
      JSON.stringify(Object.fromEntries(new FormData(e.currentTarget).entries()))
    )
    const label: LabelType = {
      title: data.title,
      name: data.name,
      placeholder: data.title
    }

    setLabels([...labels, label])
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    setIsValid(value.length > 0)
  }

  return (
    <form onSubmit={addNewLabel} className="flex flex-col items-center gap-4">
      <input
        onChange={handleChange}
        name="title"
        className="form-input rounded-lg border-blue-600 py-2 px-4"
        type="text"
        placeholder="Agrega otro campo"
      />

      <Button type="submit" icon="add" color="indigo" isValid={!isValid}>
        {!isValid ? 'Inválido' : 'Agregar campo'}
      </Button>
    </form>
  )
}

export default FormNewLabel
