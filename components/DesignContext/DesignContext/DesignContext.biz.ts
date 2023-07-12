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
    }
  }

  const handleDragEnd = (e: any) => {
    const { over } = e
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
    sidebarFieldsRegenKey,
    activeSidebarField,
    activeField,
    updateData,
  }
}
