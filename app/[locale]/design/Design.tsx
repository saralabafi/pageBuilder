/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
import { DndContext, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core'
import { Flex } from 'components/Flex/Flex'
import { Grid } from 'components/Grid/Grid'
import React, { useMemo, useState } from 'react'
import { controlItems, gridItems } from './control.const'
import { Draggable } from 'components/Drag/Draggable'
import { Droppable } from 'components/Drag/Droppable'

const components: any = {
  1: <Flex borderSize="border-2" width="w-full" height="h-12" />,
  2: <Grid />,
}

const Item = ({ item }: any) => {
  return (
    <Flex
      padding="p-4"
      width="w-auto"
      align="items-center"
      direction="flex-col"
      borderSize="border-2"
      customCSS="cursor-pointer hover:bg-gray-600 "
      borderColor="border-gray-400">
      <img src={item.icon} width={20} />
      <h2 className="mt-2">{item.title}</h2>
    </Flex>
  )
}

const Design = () => {
  const [parent, setParent] = useState<UniqueIdentifier[]>([])

  const handleDragEnd = (e: DragEndEvent) => {
    if (e.over?.id !== 'cart-droppable' ) return
    if (e.active) {
      const id: UniqueIdentifier = e.active.id
      const duplicateList = [...parent]
      duplicateList.push(id)
      parent.length ? setParent(duplicateList) : setParent([id])
    }
  }

  const selectedComponents = useMemo(() => {
    return parent?.map((key) => components[key])
  }, [parent])

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Flex padding="p-3" gap="gap-2" height="h-72" align="items-start">
        <Flex
          direction="flex-col"
          padding="p-5"
          width="w-2/6"
          borderColor="border-blue-200"
          borderSize="border-2">
          <h1 className="mb-4">Grid style</h1>
          <Grid columns="grid-cols-2" width="w-full" gap="gap-3">
            {gridItems.map((items) => {
              return (
                <Draggable id={items.id}>
                  <Item item={items} />
                </Draggable>
              )
            })}
          </Grid>
          <div className="divide-x my-4" />
          <h1 className="mb-4">Controll style</h1>
          <Grid columns="grid-cols-3" width="w-full" gap="gap-3">
            {controlItems.map((i) => {
              return <Item item={i} />
            })}
          </Grid>
        </Flex>
        <Flex
          height="h-full"
          width="w-3/6"
          padding="p-5"
          direction="flex-col"
          borderSize="border-2"
          borderColor="border-blue-200">
          <Droppable>
            {selectedComponents?.map((component) => component)}
          </Droppable>
        </Flex>
      </Flex>
    </DndContext>
  )
}

export default Design
