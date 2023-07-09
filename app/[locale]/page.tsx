'use client'
import Link from 'next/link'
import DesigneContext from 'components/DesigneContext/DesignContext/DesignContext'
import { Select } from 'components/Select/Select'
import { TextArea } from 'components/TextArea/TextArea'
import Button from 'components/Button/Button'

export default function Home() {
  const fields = [
    {
      type: 'input',
      title: 'Text Input',
    },
    {
      type: 'select',
      title: 'Select',
    },
    {
      type: 'text',
      title: 'Text',
    },
    {
      type: 'button',
      title: 'Button',
    },
    {
      type: 'textarea',
      title: 'Text Area',
    },
  ]

  const renderers: any = {
    input: () => <input type="text" placeholder="This is a text input" />,
    textarea: () => (
      <TextArea
        onChange={function (value: string): void {
          throw new Error('Function not implemented.')
        }}
        value={''}
      />
    ),
    select: () => (
      <Select
        label={'select items'}
        options={undefined}
        value={''}
        onChange={function (obj: any): void {
          throw new Error('Function not implemented.')
        }}
        customCSS={''}
      />
    ),
    text: () => (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    ),
    button: () => (
      <Button
        placeholder={'click me'}
        onClick={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    ),
  }

  return (
    <div className="flex-col -full">
      <div className="flex justify-center items-center">
        <Link className="mx-4 cursor-pointer" href="/testView">
          For view test Page
        </Link>
        <DesigneContext list={fields} renderers={renderers} />
      </div>
    </div>
  )
}
