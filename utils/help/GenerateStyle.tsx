export const generateStyles = (style: any) => {
  const generatedStyles: { [key: string]: string } = {}

  if (style?.TOP_MARGIN?.Data?.Value) {
    generatedStyles.marginTop = `${style.TOP_MARGIN.Data.Value}px`
  }
  if (style?.RIGHT_MARGIN?.Data?.Value) {
    generatedStyles.marginRight = `${style.RIGHT_MARGIN.Data.Value}px`
  }
  if (style?.LEFT_MARGIN?.Data?.Value) {
    generatedStyles.marginLeft = `${style.LEFT_MARGIN.Data.Value}px`
  }
  if (style?.BOTTOM_MARGIN?.Data?.Value) {
    generatedStyles.marginBottom = `${style.BOTTOM_MARGIN.Data.Value}px`
  }
  if (style?.TOP_PADDING?.Data?.Value) {
    generatedStyles.paddingTop = `${style.TOP_PADDING.Data.Value}px`
  }
  if (style?.RIGHT_PADDING?.Data?.Value) {
    generatedStyles.paddingRight = `${style.RIGHT_PADDING.Data.Value}px`
  }
  if (style?.LEFT_PADDING?.Data?.Value) {
    generatedStyles.paddingLeft = `${style.LEFT_PADDING.Data.Value}px`
  }
  if (style?.BOTTOM_PADDING?.Data?.Value) {
    generatedStyles.paddingBottom = `${style.BOTTOM_PADDING.Data.Value}px`
  }
  if (style?.HEIGHT?.Data?.Value) {
    generatedStyles.height = `${style.HEIGHT.Data.Value}px`
  }
  if (style?.MIN_HEIGHT?.Data?.Value) {
    generatedStyles.minHeight = `${style.MIN_HEIGHT.Data.Value}px`
  }
  if (style?.MAX_HEIGHT?.Data?.Value) {
    generatedStyles.maxHeight = `${style.MAX_HEIGHT.Data.Value}px`
  }
  if (style?.WIDTH?.Data?.Value) {
    generatedStyles.width = `${style.WIDTH.Data.Value}px`
  }
  if (style?.MIN_WIDTH?.Data?.Value) {
    generatedStyles.minWidth = `${style.MIN_WIDTH.Data.Value}px`
  }
  if (style?.MAX_WIDTH?.Data?.Value) {
    generatedStyles.maxWidth = `${style.MAX_WIDTH.Data.Value}px`
  }
  if (style?.BACKGROUND_COLOR?.Data) {
    generatedStyles.backgroundColor = `${style.BACKGROUND_COLOR.Data}`
  }
  /* Add other style properties here */

  return generatedStyles
}
