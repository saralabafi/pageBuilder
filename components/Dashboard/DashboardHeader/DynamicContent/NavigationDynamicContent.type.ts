'use client'
import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'
import { Dispatch, SetStateAction } from 'react'

export interface IFolders {
  id: string
  title: TitleType
  children?: IFolders[] | []
}
export interface IFoldersRes {
  id: string
  title: TitleType
  folders?: IFoldersRes[] | []
}

export interface INavigationDynamicContent {
  activeFolder: string | undefined
  setActiveFolder: Dispatch<SetStateAction<string | undefined>>
}
