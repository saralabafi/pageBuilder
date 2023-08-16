// 1 base
// import React, { useEffect, useRef, useState } from 'react'
// import { Resizable } from 're-resizable'

// function ResizableItems() {
//   const [items, setItems] = useState<Array<Record<string, any>>>([])
//   const itemRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>([])

//   const addItem = () => {
//     if (items.length < 12) {
//       setItems([...items, {}])
//     }
//   }

//   const removeItem = (index: number) => {
//     if (items.length > 1) {
//       const updatedItems = [...items]
//       updatedItems.splice(index, 1)
//       setItems(updatedItems)
//     }
//   }

//   useEffect(() => {
//     itemRefs.current = items.map(() => useRef<HTMLDivElement | null>(null))
//   }, [])

//   const handleResize = (
//     index: number,
//     event: MouseEvent,
//     direction: string,
//     ref: HTMLDivElement,
//     delta: any
//   ) => {
//     console.log(`Resized item ${index}`)
//     console.log('New size:', ref.style.width, ref.style.height)
//     console.log('ref :', ref)
//   }

//   const calculateGridClasses = () => {
//     const totalItems = items.length
//     const gridClasses = ['grid', `grid-cols-${totalItems}`, `gap-4`, `mb-4`]
//     return gridClasses.join(' ')
//   }

//   return (
//     <div>
//       <div className={calculateGridClasses()}>
//         {items.map((item, index) => {
//           const ref = itemRefs.current[index]
//           return (
//             <Resizable
//               key={index}
//               ref={ref as any}
//               grid={[100, 100]}
//               minWidth={100} // Set a minimum width of 100 pixels
//               minHeight={50} // Set a minimum height of 50 pixels
//               className="w-full h-12 bg-gray-500"
//               onResize={(event, direction, ref, delta) =>
//                 // {}
//                 handleResize(index, event as any, direction, ref as any, delta)
//               }></Resizable>
//           )
//         })}
//       </div>
//       {items.length < 12 && <button onClick={addItem}>Add Item</button>}
//       {items.length > 0 && (
//         <button onClick={() => removeItem(items.length - 1)}>
//           Remove Item
//         </button>
//       )}
//     </div>
//   )
// }

// export default ResizableItems

// 2 absolute ok

// import React, { useEffect, useRef, useState } from 'react'
// import { Resizable } from 're-resizable'

// function ResizableItems() {
//   const [items, setItems] = useState<Array<Record<string, any>>>([])
//   const itemRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>([])

//   const addItem = () => {
//     if (items.length < 12) {
//       setItems([...items, {}])
//     }
//   }

//   const removeItem = (index: number) => {
//     if (items.length > 1) {
//       const updatedItems = [...items]
//       updatedItems.splice(index, 1)
//       setItems(updatedItems)
//     }
//   }

//   useEffect(() => {
//     itemRefs.current = items.map(() => useRef<HTMLDivElement | null>(null))
//   }, [])

//   const handleResize = (
//     index: number,
//     event: MouseEvent,
//     direction: string,
//     ref: HTMLDivElement,
//     delta: any
//   ) => {
//     console.log(`Resized item ${index}`)
//     console.log('New size:', ref.style.width, ref.style.height)
//     console.log('ref :', ref)
//   }

//   const calculateGridClasses = () => {
//     const totalItems = items.length
//     const gridClasses = ['grid', `grid-cols-${totalItems}`, `gap-4`, `mb-4`]
//     return gridClasses.join(' ')
//   }

//   return (
//     <div style={{ position: 'relative' }}>
//       <div className={calculateGridClasses()}>
//         {/* Add the grid markup for visual comparison */}
//         <i
//           className="grid grid-cols-12 gap-4 mb-4"
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             zIndex: -1,
//           }}>
//           {Array.from({ length: 12 }).map((_, index) => (
//             <div
//               key={index}
//               className="bg-gray-300 h-12 flex items-center justify-center">
//               {index + 1}
//             </div>
//           ))}
//         </i>

//         {items.map((item, index) => {
//           const ref = itemRefs.current[index]
//           return (
//             <Resizable
//               key={index}
//               ref={ref as any}
//               // grid={[,]}
//               // minWidth={100}
//               minHeight={50}
//               className="w-full h-12 bg-gray-500"
//               onResize={(event, direction, ref, delta) =>
//                 handleResize(index, event as any, direction, ref as any, delta)
//               }>
//               {index + 1}
//             </Resizable>
//           )
//         })}
//       </div>
//       {items.length < 12 && <button onClick={addItem}>Add Item</button>}
//       {items.length > 0 && (
//         <button onClick={() => removeItem(items.length - 1)}>
//           Remove Item
//         </button>
//       )}
//     </div>
//   )
// }

// export default ResizableItems

// 3 ok visualcomparison
// import React, { useEffect, useRef, useState } from 'react'
// import { Resizable } from 're-resizable'

// function ResizableItems() {
//   const [items, setItems] = useState<Array<Record<string, any>>>([])
//   const itemRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>([])

//   const addItem = () => {
//     if (items.length < 12) {
//       setItems([...items, {}])
//     }
//   }

//   const removeItem = (index: number) => {
//     if (items.length > 1) {
//       const updatedItems = [...items]
//       updatedItems.splice(index, 1)
//       setItems(updatedItems)
//     }
//   }

//   useEffect(() => {
//     itemRefs.current = items.map(() => useRef<HTMLDivElement | null>(null))
//   }, [])

//   const gridItems = document.querySelectorAll('.visualcomparison > div')
//   const colwidth = gridItems[0]?.clientWidth + 16

//   const handleResize = (
//     index: number,
//     event: MouseEvent,
//     direction: string,
//     ref: HTMLDivElement,
//     delta: any
//   ) => {
//     // Update the column sizes in orginal grid
//     return
//   }

//   const calculateGridClasses = () => {
//     const totalItems = items.length
//     const gridClasses = ['grid', `grid-cols-${totalItems}`, `gap-4`, `mb-4`]
//     return gridClasses.join(' ')
//   }

//   return (
//     <div style={{ position: 'relative' }}>
//       <div className={calculateGridClasses()}>
//         {/* Add the grid markup for visual comparison */}
//         <i
//           className="visualcomparison grid grid-cols-12 gap-4 mb-4"
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             zIndex: -1,
//           }}>
//           {Array.from({ length: 12 }).map((_, index) => (
//             <div
//               key={index}
//               className="bg-gray-300 h-12 flex items-center justify-center">
//               {index + 1}
//             </div>
//           ))}
//         </i>

//         {items.map((item, index) => {
//           const ref = itemRefs.current[index]
//           return (
//             <Resizable
//               key={index}
//               ref={ref as any}
//               grid={[colwidth, colwidth]}
//               minHeight={50}
//               className="w-full h-12 bg-gray-500"
//               onResize={(event, direction, ref, delta) =>
//                 handleResize(index, event as any, direction, ref as any, delta)
//               }>
//               {index + 1}
//             </Resizable>
//           )
//         })}
//       </div>
//       {items.length < 12 && <button onClick={addItem}>Add Item</button>}
//       {items.length > 0 && (
//         <button onClick={() => removeItem(items.length - 1)}>
//           Remove Item
//         </button>
//       )}
//     </div>
//   )
// }

// export default ResizableItems

// 4
import React, { useEffect, useRef, useState } from 'react'
import { Resizable } from 're-resizable'

function ResizableItems() {
  const [items, setItems] = useState<Array<Record<string, any>>>([])
  const itemRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>([])

  const addItem = () => {
    if (items.length < 12) {
      setItems([...items, {}])
    }
  }

  const removeItem = (index: number) => {
    if (items.length > 1) {
      const updatedItems = [...items]
      updatedItems.splice(index, 1)
      setItems(updatedItems)
    }
  }

  useEffect(() => {
    itemRefs.current = items.map(() => useRef<HTMLDivElement | null>(null))
  }, [])

  const gridItems = document.querySelectorAll('.visualcomparison > div')
  const colwidth = gridItems[0]?.clientWidth + 16
  // Declare resizeCounts as a global variable
  let resizeCounts: number[] = []
  const handleResize = (
    index: number,
    event: MouseEvent,
    direction: string,
    ref: HTMLDivElement,
    delta: any,
    item: any
  ) => {
    // console.log('index', index)
    // console.log('ref', ref)
    // console.log('direction', direction)
    // console.log('delta', delta)
    // console.log('item', item)
  }
  const calculateGridClasses = () => {
    const totalItems = items.length
    const gridClasses = [
      'orginal',
      'grid',
      `grid-cols-${totalItems}`,
      `gap-4`,
      `mb-4`,
    ]
    return gridClasses.join(' ')
  }

  return (
    <div style={{ position: 'relative' }}>
      <div className={calculateGridClasses()}>
        {/* Add the grid markup for visual comparison */}
        <i
          className="visualcomparison grid grid-cols-12 gap-4 mb-4"
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
              className="bg-gray-300 h-12 flex items-center justify-center">
              {index + 1}
            </div>
          ))}
        </i>

        {items.map((item, index) => {
          const ref = itemRefs.current[index]
          console.log('item', item)
          return (
            <Resizable
              key={index}
              ref={ref as any}
              grid={[colwidth, colwidth]}
              minHeight={50}
              className="w-full h-12 bg-gray-500"
              onResize={(event, direction, ref, delta) =>
                handleResize(
                  index,
                  event as any,
                  direction,
                  ref as any,
                  delta,
                  item
                )
              }>
              {index + 1}
            </Resizable>
          )
        })}
      </div>
      {items.length < 12 && <button onClick={addItem}>Add Item</button>}
      {items.length > 0 && (
        <button onClick={() => removeItem(items.length - 1)}>
          Remove Item
        </button>
      )}
    </div>
  )
}

export default ResizableItems
