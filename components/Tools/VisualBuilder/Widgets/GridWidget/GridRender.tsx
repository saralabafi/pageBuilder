import { Control } from 'components/DndDesigner/DndDesigner.type'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { VisualSelectedWrapper } from 'components/DndDesigner/components/VisualSelectedWrapper/VisualSelectedWrapper'
import { useEffect } from 'react'
import { visualRenderItems } from '../../../../../app/[locale]/page/layout.const'
import { DragComponent } from './DragComponent'
import { useGridWidget } from './GridWidget.biz'
import './mycss.css'
import { useDispatch, useSelector } from 'react-redux'
import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { RootState } from 'redux/Store'
import { generateStyles } from '../../../../../utils/help/GenerateStyle'

const GridWidget = (props: Control) => {
  const { Settings } = props

  const { columnCalculator, handleClick, handleDrop, CSS_ClassNames } =
    useGridWidget(props)
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const dispatch = useDispatch()
  const { editControl, returnDefaultValue } = VisualRenderList({
    designList,
    dispatch,
  })
  const type = 'GRID_SIZE'

  const controlValue = returnDefaultValue(activeControl, type)

  let columnSpan = 0
  useEffect(() => {
    const resizableX = () => {
      const containerBox = document.querySelector('.containerbox')
      if (!containerBox) return

      let lastColumnIndex = 0

      // get grid col and spliter
      const resizers = Array.from(
        document.querySelectorAll<HTMLDivElement>('.resizer')
      )
      const items = Array.from(
        document.querySelectorAll<HTMLDivElement>('.item')
      )

      // generate class atfirst & after changing number cols in setting
      const columnElements = document.getElementsByClassName('item')
      const columnCount = columnElements.length
      columnSpan = Math.floor(12 / columnCount)
      // items.forEach((item) => {
      //   const divElement = item as HTMLDivElement // Assuming the items are HTMLDivElement
      //   divElement.removeAttribute('style')
      //   item.className = item.className.replace(/\bcol-span-\S+\s*/g, '')
      //   ;(item as HTMLDivElement).classList.add(`col-span-${columnSpan}`)
      // })

      // start mousedown
      const onmousedown = (e: MouseEvent) => {
        const resizer = e.target as HTMLDivElement
        const prevItem = resizer.previousElementSibling as HTMLDivElement
        const nextItem = resizer.nextElementSibling as HTMLDivElement
        const startX = e.clientX

        // visualcomparison
        const visualComparisonGrid = document.querySelector('.visualcomparison')
        const columnWidth = visualComparisonGrid?.firstElementChild?.clientWidth
        lastColumnIndex = Math.floor(e.pageX / columnWidth!)

        const prevItemWidth = prevItem.offsetWidth
        const nextItemWidth = nextItem.offsetWidth

        // start mousemove
        document.onmousemove = (e) => {
          const deltaX = e.clientX - startX
          const newPrevItemWidth = prevItemWidth + deltaX
          const newNextItemWidth = nextItemWidth - deltaX

          const step = visualComparisonGrid?.firstElementChild?.clientWidth // Define the resize step value here

          const roundedPrevItemWidth =
            Math.round(newPrevItemWidth / step!) * step!
          const roundedNextItemWidth =
            Math.round(newNextItemWidth / step!) * step!

          // backgroundColor
          resizers.forEach((resizer) => {
            ;(
              resizer.previousElementSibling as HTMLDivElement
            ).style.backgroundColor = ''
            ;(
              resizer.nextElementSibling as HTMLDivElement
            ).style.backgroundColor = ''
          })

          if (roundedPrevItemWidth <= 0 || roundedNextItemWidth <= 0) {
            //stopResizing
            document.onmousemove = null
            document.onmouseup = null
            return
          }

          prevItem.style.flex = `0 0 ${roundedPrevItemWidth}px`
          // prevItem.style.backgroundColor = `gray`;
          // Clear old-class that generate on-time
          items?.forEach((element) => {
            element.classList.remove(
              ...Array.from(element.classList).filter((className) =>
                className.startsWith('col-span-')
              )
            )
          })
          // if (Math.round(roundedPrevItemWidth / columnWidth!) != 0) {
          if (deltaX > 0) {
            // Mouse moved right
            // prevItem
            prevItem.style.flex = `0 0 ${roundedPrevItemWidth}px`
            // prevItem.style.backgroundColor = "gray";
            if (roundedPrevItemWidth / columnWidth! === columnSpan) {
              prevItem.classList.add(`col-span-${columnSpan}`)
            } else {
              prevItem.classList.add(
                `col-span-${Math.round(roundedPrevItemWidth / columnWidth!)}`
              )
            }
            // nextItem
            nextItem.style.flex = `0 0 ${roundedNextItemWidth}px`
            // nextItem.style.backgroundColor = "red";

            if (roundedNextItemWidth / columnWidth! === columnSpan) {
              nextItem.classList.add(`col-span-${columnSpan}`)
            } else {
              nextItem.classList.add(
                `col-span-${Math.round(roundedNextItemWidth / columnWidth!)}`
              )
            }
          } else if (deltaX < 0) {
            // Mouse moved left
            // nextItem
            nextItem.style.flex = `0 0 ${roundedNextItemWidth}px`
            // nextItem.style.backgroundColor = "gray";
            if (roundedNextItemWidth / columnWidth! === columnSpan) {
              nextItem.classList.add(`col-span-${columnSpan}`)
            } else {
              nextItem.classList.add(
                `col-span-${Math.round(roundedNextItemWidth / columnWidth!)}`
              )
            }
            // prevItem
            prevItem.style.flex = `0 0 ${roundedPrevItemWidth}px`
            // prevItem.style.backgroundColor = "blue";

            if (roundedPrevItemWidth / columnWidth! === columnSpan) {
              prevItem.classList.add(`col-span-${columnSpan}`)
            } else {
              prevItem.classList.add(
                `col-span-${Math.round(roundedPrevItemWidth / columnWidth!)}`
              )
            }
          }
          // }
        }

        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
          getClassFromStylesFinal()
        }

        const getClassFromStylesFinal = () => {
          debugger
          const items = Array.from(
            document.querySelectorAll<HTMLDivElement>('.item')
          )
          const inlineStyles: (RegExpMatchArray | string | null | any)[] = []

          items.forEach((item) => {
            const computedStyle = item.style.cssText
            inlineStyles.push(computedStyle)
            const lastNumbersRegex = /(\d+)/g
            const extractedNumbers = inlineStyles.map((style) => {
              const matches = style?.match(lastNumbersRegex)
              if (matches && matches.length > 0) {
                const lastNumber = matches[matches.length - 1]
                return lastNumber
              }
              return null
            })

            items.forEach((item1, index1) => {
              extractedNumbers.forEach((item2, index2) => {
                // Perform operations with item1 and item2
                if (item2 != null) {
                  if (
                    item2 / columnWidth! != 0 &&
                    item2 / columnWidth! != null
                  ) {
                    if (index1 === index2 && item1 != null) {
                      // item1.classList.remove(
                      //   ...Array.from(item1.classList).filter((className) =>
                      //     className.startsWith('col-span-')
                      //   )
                      // )
                      item1.classList.add(
                        `col-span-${Math.round(item2 / columnWidth!)}`
                      )
                      console.log(
                        'item1',
                        item1.id,
                        type,
                        Math.round(item2 / columnWidth!)
                      )
                      editControl(item1.id, type, {
                        Data: Math.round(item2 / columnWidth!),
                      })
                    }
                  }
                } else {
                  if (index1 === index2 && item1 != null) {
                    // item1.classList.remove(
                    //   ...Array.from(item1.classList).filter((className) =>
                    //     className.startsWith('col-span-')
                    //   )
                    // )
                    const columnElements =
                      document.getElementsByClassName('item')
                    const columnCount = columnElements.length
                    columnSpan = Math.floor(12 / columnCount)
                    item1.classList.add(`col-span-${columnSpan}`)
                    editControl(item1.id, type, {
                      Data: columnSpan,
                    })
                  }
                }
              })
            })
          })
        }
      }

      resizers.forEach((resizer) => {
        resizer.addEventListener('mousedown', onmousedown)
      })

      return () => {
        resizers.forEach((resizer) => {
          resizer.removeEventListener('mousedown', onmousedown)
        })
      }
    }

    resizableX()
  }, [props.Children])

  useEffect(() => {
    const resizableXfirst = () => {
      // Add your desired functionality here
      const containerBox = document.querySelector('.containerbox')
      if (!containerBox) return

      const lastColumnIndex = 0

      // get grid col and spliter
      const resizers = Array.from(
        document.querySelectorAll<HTMLDivElement>('.resizer')
      )
      const items = Array.from(
        document.querySelectorAll<HTMLDivElement>('.item')
      )

      // generate class atfirst & after changing number cols in setting
      const columnElements = document.getElementsByClassName('item')
      const columnCount = columnElements.length
      columnSpan = Math.floor(12 / columnCount)
      items.forEach((item) => {
        const divElement = item as HTMLDivElement // Assuming the items are HTMLDivElement
        divElement.removeAttribute('style')
        item.className = item.className.replace(/\bcol-span-\S+\s*/g, '')
        ;(item as HTMLDivElement).classList.add(`col-span-${columnSpan}`)
      })
    }

    resizableXfirst()
  }, [props.Children?.length])

  return (
    <div style={{ position: 'relative' }} dir="ltr">
      {/* Add the grid markup for visual comparison */}
      <i
        className="visualcomparison grid grid-cols-12"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-400 h-32 flex justify-center border border-dashed">
            {index + 1}
          </div>
        ))}
      </i>
      {/* ${CSS_ClassNames} ${props.Id} */}
      <div className={`containerbox flex h-32 ${CSS_ClassNames} ${props.Id}`}>
        {props?.Children && props.Children?.length > 0
          ? props?.Children?.map((item: Control, index: number) => {
              const currentPath = `${props.path}-${index}`
              console.log('Settings', item.Settings?.GRID_SIZE?.Data)
              return (
                <>
                  <div
                    key={item.Id}
                    id={`${item.Id}`}
                    style={generateStyles(Settings!)}
                    className={`item h-32 col-span-${item?.Settings?.GRID_SIZE?.Data}`}>
                    {/* ${columnCalculator()> */}
                    <div className="border border-dashed border-slate-400 p-5 w-full h-full">
                      {item.Children?.map((control: Control) => {
                        return (
                          <VisualSelectedWrapper
                            deleteItem={() => {}}
                            control={control}
                            // hidden={activeControl !== control.Id}
                            hidden={undefined}
                            key={control.Id}>
                            <DragComponent
                              renders={visualRenderItems}
                              handleClick={handleClick}
                              component={control}
                            />
                            <DropZone
                              data={{
                                parentId: item.Id,
                                path: currentPath,
                                childrenCount: item?.Children?.length,
                              }}
                              onDrop={handleDrop}
                              path=""
                            />
                          </VisualSelectedWrapper>
                        )
                      })}
                      <DropZone
                        data={{
                          parentId: item.Id,
                          path: currentPath,
                          childrenCount: item?.Children?.length,
                        }}
                        onDrop={handleDrop}
                        path=""
                      />
                    </div>
                  </div>

                  {console.log(props?.Settings?.SHOW_GUTTER?.Data)}

                  {index < props?.Children?.length! - 1 &&
                    props?.Settings?.SHOW_GUTTER?.Data !== false && (
                      <div className="resizer h-32"></div>
                    )}
                </>
              )
            })
          : null}
      </div>
    </div>
  )
}
export default GridWidget
