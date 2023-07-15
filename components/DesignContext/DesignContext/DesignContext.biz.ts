import { UniqueIdentifier, rectIntersection } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useRef, useState } from 'react'
import { useImmer } from 'use-immer'

export const useDesignContext = (props: IDesignContextProps) => {
  const [sidebarFieldsRegenKey, setSidebarFieldsRegenKey] = useState(Date.now())

  const currentDragFieldRef = useRef<any>()
  const spacerInsertedRef = useRef<boolean>()

  const [activeField, setActiveField] = useState<any>()
  const [activeSidebarField, setActiveSidebarField] = useState<any>()

  const [data, updateData] = useImmer({
    fields: [],
    active: 0,
  })
  interface ItemType {
    id: UniqueIdentifier
    color: string
  }
  // a little utility for producing unique
  const id_gen = (() => {
    let id = 0
    return () => id++
  })()
  const [activeItem, setActiveItem] = useState<ItemType | null>(null)
  const [activeItemOrigin, setActiveItemOrigin] = useState<string | null>(null)
  const [pickerColor, setPickerColor] = useState('#09C5D0')
  const [pickerId, setPickerId] = useState<UniqueIdentifier>(id_gen)
  const [palletteItems, setPalletteItems] = useState<ItemType[]>(() =>
    ['red', 'green', 'blue'].map((color) => ({ id: id_gen(), color }))
  )

  const getItem = (id: UniqueIdentifier) => {
    if (id === pickerId) return { id: pickerId, color: pickerColor }
    return palletteItems.find((x) => x.id === id)!
  }

  const cleanUp = () => {
    setActiveSidebarField(null)
    setActiveField(null)
    currentDragFieldRef.current = null
    spacerInsertedRef.current = false
  }

  const handleDragStart = (e: any) => {
    const { active } = e
    const activeData = getData(active)
    if (activeData.fromSidebar) {
      const { field } = activeData
      const { type } = field
      setActiveSidebarField(field)
      currentDragFieldRef.current = {
        id: active.id,
        type,
        name: `${type}${fields?.length + 1}`,
        parent: null,
        style: '',
      }
      if (active.id === pickerId) setActiveItemOrigin('current')
      setActiveItem(getItem(active.id))
      return
    }
    const { field, index } = activeData

    setActiveField(field)
    currentDragFieldRef.current = field

    updateData((draft: any) => {
      draft.fields.splice(index, 1, createSpacer({ id: active.id }))
    })
  }

  const handleDragOver = (e: any) => {
    const { active, over } = e
    const activeData = getData(active)

    if (activeData.fromSidebar) {
      const overData = getData(over)

      if (!spacerInsertedRef.current) {
        const spacer = createSpacer({
          id: active.id + '-spacer',
        })

        //add item for non first loads -- by this func you can have more than from one item

        updateData((draft: any) => {
          if (!draft.fields.length) {
            draft.fields.push(spacer)
          } else {
            const nextIndex =
              overData.index > -1 ? overData.index : draft.fields.length

            draft.fields.splice(nextIndex, 0, spacer)
          }
          spacerInsertedRef.current = true
        })
      } else if (!over) {
        if (activeItemOrigin === null) return
        const indx = palletteItems.findIndex((x) => x.id === active.id)
        if (indx === -1) return
        setPalletteItems(palletteItems.filter((x) => x.id !== active.id))
        if (activeItemOrigin === 'current') setPickerId(active.id)
        if (over.id === 'current' && activeItemOrigin !== null) {
          // we're not dragging over the pallette, so we may need to remove the item from the pallette
          const active_indx = palletteItems.findIndex((x) => x.id === active.id)
          if (active_indx === -1) return
          setPalletteItems(palletteItems.filter((x) => x.id !== active.id))

          return
        }
        // support sortable
        updateData((draft: any) => {
          draft.fields = draft.fields.filter((f: any) => f.type !== 'spacer')
        })
        spacerInsertedRef.current = false
      } else {
        updateData((draft: any) => {
          const spacerIndex = draft.fields.findIndex(
            (f: any) => f.id === active.id + '-spacer'
          )
          const nextIndex =
            overData.index > -1 ? overData.index : draft.fields.length - 1
          if (nextIndex === spacerIndex) {
            return
          }
          draft.fields = arrayMove(draft.fields, spacerIndex, overData.index)
        })
      }

      const active_indx = palletteItems.findIndex((x) => x.id === active.id)
      const over_indx = palletteItems.findIndex((x) => x.id === over.id)

      if (active_indx !== -1 && over_indx !== -1) {
        if (active_indx === over_indx) return
        setPalletteItems(arrayMove(palletteItems, active_indx, over_indx))
      } else if (over.id === 'pallette') {
        if (palletteItems.findIndex((x) => x.id === active.id) === -1) {
          if (active.id === pickerId) {
            setPalletteItems([
              ...palletteItems,
              { id: pickerId, color: pickerColor },
            ])
            setPickerId(id_gen)
          }
        }
      }
    }
  }

  const handleDragEnd = (e: any) => {
    const { over, active } = e
    if (!over) {
      cleanUp()

      updateData((draft: any) => {
        draft.fields = draft.fields.filter((f: any) => f.type !== 'spacer')
      })
      return
    }

    const nextField = currentDragFieldRef.current

    if (nextField) {
      const overData = getData(over)
      updateData((draft: any) => {
        const spacerIndex = draft.fields.findIndex(
          (f: any) => f.type === 'spacer'
        )
        draft.fields.splice(spacerIndex, 1, nextField)

        draft.fields = arrayMove(draft.fields, spacerIndex, overData.index || 0)
      })
    }

    setSidebarFieldsRegenKey(Date.now())
    cleanUp()
  }

  const handleDragCancel = (e: any) => {
    setActiveItem(null)
    setActiveItemOrigin(null)
  }

  function getData(prop: any) {
    return prop?.data?.current ?? {}
  }

  function createSpacer({ id }: { id: string }) {
    return {
      id,
      type: 'spacer',
      title: 'spacer',
    }
  }

  const { fields, active } = data

  return {
    fields,
    active,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
    rectIntersection,
    setPickerColor,
    sidebarFieldsRegenKey,
    activeSidebarField,
    activeField,
    updateData,
    activeItemOrigin,
    pickerColor,
    pickerId,
    palletteItems,
    activeItem,
  }
}
