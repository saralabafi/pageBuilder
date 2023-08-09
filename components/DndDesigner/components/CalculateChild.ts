export const CalculateChild = (layout: any, splitDropZonePath: any) => {
  let prevChild
  switch (splitDropZonePath.length) {
    case 2:
      prevChild =
        layout[splitDropZonePath[0]].children[splitDropZonePath[1]].children
      break
    case 3:
      prevChild =
        layout[splitDropZonePath[0]].children[splitDropZonePath[1]].children[0]
          .children[splitDropZonePath[2]].children
      break

    default:
      break
  }
  return prevChild
}
