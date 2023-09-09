export const generateStyles = (style: any) => {
  const generatedStyles: { [key: string]: string } = {}

  if (style?.TOP_MARGIN?.Value?.Data?.Value) {
    generatedStyles.marginTop = `${style.TOP_MARGIN.Value.Data.Value}px`
  }
  if (style?.RIGHT_MARGIN?.Value?.Data?.Value) {
    generatedStyles.marginRight = `${style.RIGHT_MARGIN.Value.Data.Value}px`
  }
  if (style?.LEFT_MARGIN?.Value?.Data?.Value) {
    generatedStyles.marginLeft = `${style.LEFT_MARGIN.Value.Data.Value}px`
  }
  if (style?.BOTTOM_MARGIN?.Value?.Data?.Value) {
    generatedStyles.marginBottom = `${style.BOTTOM_MARGIN.Value.Data.Value}px`
  }
  if (style?.TOP_PADDING?.Value?.Data?.Value) {
    generatedStyles.paddingTop = `${style.TOP_PADDING.Value.Data.Value}px`
  }
  if (style?.RIGHT_PADDING?.Value?.Data?.Value) {
    generatedStyles.paddingRight = `${style.RIGHT_PADDING.Value.Data.Value}px`
  }
  if (style?.LEFT_PADDING?.Value?.Data?.Value) {
    generatedStyles.paddingLeft = `${style.LEFT_PADDING.Value.Data.Value}px`
  }
  if (style?.BOTTOM_PADDING?.Value?.Data?.Value) {
    generatedStyles.paddingBottom = `${style.BOTTOM_PADDING.Value.Data.Value}px`
  }
  if (style?.HEIGHT?.Value?.Data?.Value) {
    generatedStyles.height = `${style.HEIGHT.Value.Data.Value}px`
  }
  if (style?.MIN_HEIGHT?.Value?.Data?.Value) {
    generatedStyles.minHeight = `${style.MIN_HEIGHT.Value.Data.Value}px`
  }
  if (style?.MAX_HEIGHT?.Value?.Data?.Value) {
    generatedStyles.maxHeight = `${style.MAX_HEIGHT.Value.Data.Value}px`
  }
  if (style?.WIDTH?.Value?.Data?.Value) {
    generatedStyles.width = `${style.WIDTH.Value.Data.Value}px`
  }
  if (style?.MIN_WIDTH?.Value?.Data?.Value) {
    generatedStyles.minWidth = `${style.MIN_WIDTH.Value.Data.Value}px`
  }
  if (style?.MAX_WIDTH?.Value?.Data?.Value) {
    generatedStyles.maxWidth = `${style.MAX_WIDTH.Value.Data.Value}px`
  }
  if (style?.BACKGROUND_COLOR?.Value?.Data) {
    generatedStyles.backgroundColor = `${style.BACKGROUND_COLOR.Value.Data}`
  }
  /* Add other style properties here */

  return generatedStyles
}
