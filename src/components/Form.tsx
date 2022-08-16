import { useState } from 'react'
import type { LabelType } from 'src/env'

import Label from './Label'
import FormNewLabel from './FormNewLabel'
import Button from './Button'

const initialValue: LabelType[] = [
  {
    title: 'Sobre Mí',
    name: 'Sobre Mí',
    placeholder: 'Soy...'
  },
  {
    title: 'Formación',
    name: 'Formación',
    placeholder: 'Estudios, certificaciones...'
  }
]

export default function Form() {
  const [labels, setLabels] = useState<LabelType[]>(initialValue)
  const [isValid, setIsValid] = useState<boolean>(false)

  const handleSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = JSON.parse(
      JSON.stringify(Object.fromEntries(new FormData(e.currentTarget).entries()))
    )

    const isEmpty = Object.values(data).some(value => value === '')

    if (labels.length === 0) return alert('No hay ningún campo para guardar.')
    if (isEmpty) return alert('No puede haber campos vacíos.')

    const arrFromData = Object.entries(data).map(([key, value]) => ({
      name: key,
      content:
        typeof value === 'string'
          ? value?.length > 60
            ? value?.split('\n').join('%0A')
            : value
          : ''
    }))

    const email = 'drios28@outlook.es'
    const subject = 'Mis%20datos'

    const body = arrFromData.map(({ name, content }) => `${name}%3A%0D%0A${content}%0A%0A`).join('')

    const template = `
      mailto:${email}?subject=${subject}&body=Estos%20son%20mis%20datos%3A%0D%0A%0D%0A${body}%0D%0A-------------------------%0D%0A%0D%0APara%20desarrolladores%3A%0D%0A%0D%0AJSON%3A%0D%0A%0D%0A${JSON.stringify(
      data
    )}`

    window.open(template, '_blank')
  }

  const deleteLabel = (name: string) => setLabels(labels.filter(label => label.name !== name))

  return (
    <article className="flex flex-col items-center gap-8">
      <form className="flex flex-col-reverse items-center gap-8" onSubmit={handleSubmitData}>
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {labels.map((label, index) => (
            <Label
              key={index}
              title={label.title}
              placeholder={label.placeholder}
              deleteLabel={deleteLabel}
            />
          ))}
        </section>

        <Button type="submit" icon="send" color="green">
          Enviar datos
        </Button>
      </form>

      <FormNewLabel
        labels={labels}
        setLabels={setLabels}
        isValid={isValid}
        setIsValid={setIsValid}
      />
    </article>
  )
}
