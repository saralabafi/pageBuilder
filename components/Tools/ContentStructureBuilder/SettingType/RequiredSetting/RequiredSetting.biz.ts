import { useState } from 'react'
import { useLocale } from 'next-intl'
import { IRequiredSettingProps } from './RequiredSetting.types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'

export const useRequiredSetting = (props: IRequiredSettingProps) => {
  const [toggle, setToggle] = useState(props.checked)
  const [inputValue, setInputValue] = useState('')
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const dispatch = useDispatch()
  const { editControl } = ContentRenderList({ designList, dispatch })
  const type: any = props.Source.type
  const { Title, DefaultValue, Help, PlaceHolder, ErrorMessage } = props.Source
  const locale = useLocale()

  const handleClick = () => {
    setToggle(!toggle)
    editControl(activeControl, {
      [type]: { show: !toggle },
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    editControl(activeControl, {
      [type]: { show: true, message: e.target.value },
    })
  }

  return {
    locale,
    toggle,
    inputValue,
    Title,
    DefaultValue,
    Help,
    PlaceHolder,
    ErrorMessage,
    handleClick,
    handleInputChange,
  }
}
