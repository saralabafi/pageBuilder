import { useState } from 'react'
import { useLocale } from 'next-intl'
import { IRadioGroup } from './RadioSetting.type'
import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'

export const useRadioSetting = ({ Source }: IRadioGroup) => {
  const [id, setId] = useState<string>('')
  const locale = useLocale()
  const dispatch = useDispatch()

  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const { editControl } = ContentRenderList({ designList, dispatch })
  const sample = Source.Source
  const options = Object.entries(sample).map(([value, title]) => {
    return { value, title }
  })
  const handleSelect = (selectId: string) => {
    const type: any = Source.type
    setId(selectId)
    editControl(activeControl, {
      [type]: selectId,
    })
  }

  return {
    locale,
    id,
    setId,
    Source,
    options,
    handleSelect,
  }
}
