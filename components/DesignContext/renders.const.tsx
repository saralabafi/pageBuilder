import Button from 'components/Button/Button'
import { Flex } from 'components/Flex/Flex'
import { Grid } from 'components/Grid/Grid'
import { Select } from 'components/Select/Select'
import { TextArea } from 'components/TextArea/TextArea'

export const renders: any = {
  row: () => {
    // console.log(you can access to styles)
    return (
      <Flex
        customCSS="border-2 border-gray-500 p-5 rounded-md"
        justify="justify-around">
        <Grid
          row="grid-rows-1"
          columns="grid-cols-3"
          customCSS="w-full"
          gap="gap-4">
          <div className="w-auto h-10 border-2 border-gray-300 " />
          <div className="w-auto h-10 border-2 border-gray-300 " />
          <div className="w-auto h-10 border-2 border-gray-300 " />
        </Grid>
      </Flex>
    )
  },
  grid: () => <Grid />,
  input: () => <input type="text" placeholder="This is a text input" />,
  textarea: () => <TextArea onChange={() => console.log()} value={''} />,
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
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
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
