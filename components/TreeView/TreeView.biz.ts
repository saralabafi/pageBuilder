import { ArrayType } from './TreeView.type'

export const useTreeView = () => {
  const calculatePadding = (
    clone: boolean | undefined,
    depth: number,
    indentationWidth: number
  ) => {
    const array: ArrayType = {
      0: 'ps-0 !pe-0',
      10: 'ps-[10px] !pe-0',
      20: 'ps-[20px] !pe-0',
      30: 'ps-[30px] !pe-0',
      40: 'ps-[50px] !pe-0',
      50: 'ps-[60px] !pe-0',
      60: 'ps-[70px] !pe-0',
      70: 'ps-[80px] !pe-0',
      80: 'ps-[100px] !pe-0',
    }

    return array[clone ? indentationWidth : indentationWidth * depth]
  }

  return {
    calculatePadding,
  }
}
