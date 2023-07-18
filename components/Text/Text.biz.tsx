import { ITextProps } from './Text.types'

export const useText = (props: ITextProps) => {
  const { fontSize = 14, fontWeight = 400 } = props

  const fontSizeRender = () => {
    const fonts = {
      12: 'text-xs',
      14: 'text-sm',
      16: 'text-base',
      18: 'text-lg',
      20: 'text-xl',
      24: 'text-2xl',
      30: 'text-3xl',
    }

    return fonts[fontSize]
  }

  const fontWeightRender = () => {
    const weight = {
      100: 'font-thin',
      200: 'font-extralight',
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
      800: 'font-extrabold',
      900: 'font-black',
    }

    return weight[fontWeight]
  }

  return { fontSizeRender, fontWeightRender }
}
