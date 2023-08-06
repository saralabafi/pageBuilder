import { createSlice } from '@reduxjs/toolkit'
import shortid from 'shortid'

const initialState: any = {
  designList: [],
  activeTab: 0,
  activeControl: 0,
  activeMenu: 0,
}

export const manageDesign = createSlice({
  name: 'pagDesign',
  initialState,
  reducers: {
    setDesignList: (state, { payload }) => {
      return { ...state, designList: payload }
    },
    selectActiveTab: (state, { payload }) => {
      return { ...state, activeTab: payload }
    },
    selectActiveControl: (state, { payload }) => {
      return { ...state, activeControl: payload }
    },
    setSelected: () => {
      return
    },
    selectActiveMenu: (state, { payload }) => {
      return { ...state, activeMenu: payload }
    },
    setConfigOnActiveTab: (state, { payload }) => {
      const dictionaryObj: any = {}
      state.designList.map((firstLayerItem: any) => {
        if (firstLayerItem?.children) {
          dictionaryObj[firstLayerItem.id] = firstLayerItem
          firstLayerItem.children.map((column: any) => {
            column.children.map((secondLayerItem: any) => {
              dictionaryObj[secondLayerItem.id] = secondLayerItem
            })
          })
        } else {
          dictionaryObj[firstLayerItem.id] = firstLayerItem
        }
      })

      const selectItem = dictionaryObj[state.activeControl]
      if (selectItem?.style) {
        const diff = Number(payload.column) - selectItem.style.column
        const childrenOfSelectedItem = [...selectItem.children]
        if (selectItem.style.column < Number(payload.column)) {
          for (let i = 1; i <= diff; i++) {
            childrenOfSelectedItem.push({
              type: 'column',
              id: shortid.generate(),
              children: [],
            })
          }
        } else {
          childrenOfSelectedItem.splice(payload.column)
        }
        selectItem.children = childrenOfSelectedItem
      } else {
        const children = []
        for (let i = 1; i <= Number(payload.column); i++) {
          children.push({
            type: 'column',
            id: shortid.generate(),
            children: [],
          })
        }

        selectItem.children = children
      }

      selectItem.style = payload
    },
  },
})

export const {
  setSelected,
  setDesignList,
  selectActiveTab,
  selectActiveMenu,
  selectActiveControl,
  setConfigOnActiveTab,
} = manageDesign.actions

export default manageDesign.reducer
