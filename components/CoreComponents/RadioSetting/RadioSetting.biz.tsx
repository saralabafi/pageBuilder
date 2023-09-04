import { useState } from 'react'
import { useLocale } from 'next-intl'
import { IRadioGroup } from './RadioSetting.type'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'

export const useRadioSetting = ({ Source }: IRadioGroup) => {
  const locale = useLocale()
  const dispatch = useDispatch()

  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const { editControl, returnDefaultValue } = ContentRenderList({
    designList,
    dispatch,
  })
  const sample = Source.Source

  const type: any = Source.type
  const valueControl = returnDefaultValue(activeControl, type)
  const options = Object.entries(sample).map(([value, title]) => {
    return { value, title }
  })

  const handleSelect = (selectId: string) => {
    editControl(activeControl, type, { Data: selectId })
  }

  return {
    locale,
    valueControl,
    Source,
    options,
    handleSelect,
  }
}
