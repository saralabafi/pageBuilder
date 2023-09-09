export interface ITableProps {
  columns: ColumnType[]
  dataSource: any
  // {
  //   [key: string]: string
  //   render?: (text: any, record: any) => JSX.Element
  // }[]
}

export type ColumnType = {
  key: string
  title: string
  dataIndex: string
  render?: (text: string, record: any) => JSX.Element
}
