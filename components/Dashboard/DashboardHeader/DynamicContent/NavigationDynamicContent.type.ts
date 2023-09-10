'use client'
import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'
import { Dispatch, SetStateAction } from 'react'

export interface IFolders {
  id: string
  title: LocalizeStringType
  children?: IFolders[] | []
}
export interface IFoldersRes {
  id: string
  title: LocalizeStringType
  folders?: IFoldersRes[] | []
}

export interface INavigationDynamicContent {
  activeFolder: string | undefined
  setActiveFolder: Dispatch<SetStateAction<string | undefined>>
}
