import { useState } from 'react'
import { useLocale } from 'next-intl'
import { IRadioGroup } from './RadioGroup.type'
import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'

export const useRadioGroup = (props: IRadioGroup) => {
  const locale = useLocale()
  const [id, setId] = useState<string>('')
  const { Source, Title, gap = 'gap-3', direction = 'flex-col' } = props

  const options: { value: string; title: TitleType }[] = Object.entries(
    Source
  ).map(([value, title]) => {
    return { value, title }
  })

  return { locale, id, setId, Source, Title, gap, direction, options }
}
