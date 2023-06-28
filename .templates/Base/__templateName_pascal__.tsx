'use client'

import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import use__templateName_pascal__ from './__templateName_pascal__.biz'
import { I__templateName_pascal__Props } from './__templateName_pascal__.types'

const __templateName_pascal__: FC<I__templateName_pascal__Props> = (props) => {
  const {} = use__templateName_pascal__(props)
  const t = useTranslations('')

  return <div>__templateName_sentence__ works :)</div>
}

export default __templateName_pascal__
