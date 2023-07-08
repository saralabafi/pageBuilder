// These will be available from the sidebar

import Button from 'components/Button/Button'
import { Select } from 'components/Select/Select'

interface ElementMap {
  [key: string]: () => Element
}

// These define how we render the field
// export const renderers: any = {
//   input: () => <input type="text" placeholder="This is a text input" />,
//   // textarea: () => <textarea rows="5" />,
//   textarea: () => <input type="textarea" name="textValue" />,
//   select: () => (
//     <select>
//       <option value="1">1</option>
//       <option value="2">2</option>
//       <option value="3">3</option>
//     </select>
//   ),
//   text: () => (
//     <p>
//       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//       Lorem Ipsum has been the industry's standard dummy text ever since the
//       1500s, when an unknown printer took a galley of type and scrambled it to
//       make a type specimen book. It has survived not only five centuries, but
//       also the leap into electronic typesetting, remaining essentially
//       unchanged. It was popularised in the 1960s with the release of Letraset
//       sheets containing Lorem Ipsum passages, and more recently with desktop
//       publishing software like Aldus PageMaker including versions of Lorem
//       Ipsum.
//     </p>
//   ),
//   button: () => <button>Button</button>,
// }

export const renderers: any = {
  input: () => <input type="text" placeholder="This is a text input" />,
  // textarea: () => <textarea rows="5" />,
  textarea: () => <input type="textarea" name="textValue" />,
  select: () => (
   <Select label={'select items'} options={undefined} value={''} onChange={function (obj: any): void {
      throw new Error('Function not implemented.')
    } } customCSS={''} />
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
